/**
 * Delivery Logic Engine
 * 
 * Rules:
 * - Premium = Calm, transparent logic. No fake urgency.
 * - Custom orders always dictate the timeline of the entire cart unless split shipments are allowed (MVP: single shipment).
 */

export type DeliveryZone = 'LAGOS' | 'ABUJA' | 'NATIONWIDE' | 'UNSUPPORTED';
export type DeliveryMethod = 'WHITE_GLOVE' | 'CRATED' | 'BESPOKE_FREIGHT';

export interface ProductDeliveryConfig {
  isMadeToOrder: boolean;
  baseLeadTimeDays: number;      // e.g., 14
  maxLeadTimeDays: number;      // e.g., 21
  requiresWhiteGlove: boolean;  // Oversized items
  isCustomMaterial: boolean;    // Custom swatches add time
}

export interface DeliveryEstimate {
  zone: DeliveryZone;
  method: DeliveryMethod;
  cost: number;
  minDays: number;
  maxDays: number;
  message: string;
  isManualReview: boolean;
}

const ZONE_CONFIGS: Record<DeliveryZone, { baseDays: number; maxDays: number; defaultMethod: DeliveryMethod; baseCost: number }> = {
  LAGOS: { baseDays: 2, maxDays: 5, defaultMethod: 'WHITE_GLOVE', baseCost: 25000 },
  ABUJA: { baseDays: 5, maxDays: 10, defaultMethod: 'CRATED', baseCost: 45000 },
  NATIONWIDE: { baseDays: 7, maxDays: 14, defaultMethod: 'CRATED', baseCost: 65000 },
  UNSUPPORTED: { baseDays: 0, maxDays: 0, defaultMethod: 'BESPOKE_FREIGHT', baseCost: 0 }
};

export function calculateDelivery(
  zone: DeliveryZone,
  products: ProductDeliveryConfig[]
): DeliveryEstimate {
  if (zone === 'UNSUPPORTED') {
    return {
      zone,
      method: 'BESPOKE_FREIGHT',
      cost: 0,
      minDays: 0,
      maxDays: 0,
      message: 'Our Concierge will contact you within 24 hours with a custom freight quote.',
      isManualReview: true,
    };
  }

  const zoneCtx = ZONE_CONFIGS[zone];
  
  // Rule 1: Custom Orders / MTO govern the entire cart timeline
  const hasCustom = products.some(p => p.isCustomMaterial || p.isMadeToOrder);
  const requiresWhiteGlove = products.some(p => p.requiresWhiteGlove);
  
  // Calculate Base Timeline (max of all products + transit)
  let maxProductMinDays = 0;
  let maxProductMaxDays = 0;

  products.forEach(p => {
    // Custom material adds 14 days to standard MTO
    const customAdder = p.isCustomMaterial ? 14 : 0;
    maxProductMinDays = Math.max(maxProductMinDays, p.baseLeadTimeDays + customAdder);
    maxProductMaxDays = Math.max(maxProductMaxDays, p.maxLeadTimeDays + customAdder);
  });

  const finalMinDays = maxProductMinDays + zoneCtx.baseDays;
  const finalMaxDays = maxProductMaxDays + zoneCtx.maxDays;

  // Rule 2: White Glove overrides Crated if available in zone
  const isWhiteGloveAvailable = zone === 'LAGOS' || zone === 'ABUJA';
  const finalMethod: DeliveryMethod = (requiresWhiteGlove && isWhiteGloveAvailable) || zone === 'LAGOS' 
    ? 'WHITE_GLOVE' 
    : 'CRATED';

  // Rule 3: Cost multipliers
  let finalCost = zoneCtx.baseCost;
  if (finalMethod === 'WHITE_GLOVE' && zone === 'ABUJA') {
    finalCost += 35000; // White Glove out of State surcharge
  }

  // Messaging Logic
  let message = '';
  if (hasCustom) {
    message = `Crafted to order. Estimated delivery in ${Math.ceil(finalMinDays/7)} to ${Math.ceil(finalMaxDays/7)} weeks.`;
  } else {
    message = `Estimated delivery locally in ${finalMinDays}-${finalMaxDays} working days.`;
  }

  if (finalMethod === 'WHITE_GLOVE') {
    message += ' Includes assembly and packaging removal.';
  } else if (finalMethod === 'CRATED') {
    message += ' Securely crated for long-distance transit. Curbside delivery.';
  }

  return {
    zone,
    method: finalMethod,
    cost: finalCost,
    minDays: finalMinDays,
    maxDays: finalMaxDays,
    message,
    isManualReview: false
  };
}
