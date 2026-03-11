# XTC-Radio

A hybrid dual-source audio platform with playlist importing, real-time FX synthesis, and persistent offline storage.

## Features

- **Dual-source playback engine** — Seamless switching between streaming and local blob playback
- **Spotify → YouTube → Cobalt pipeline** — Import any Spotify playlist, resolve tracks via YouTube, download via Cobalt
- **Web Audio API FX pads** — Real-time audio synthesis with custom effects
- **IndexedDB persistence** — Full offline playback with local audio storage
- **Vercel serverless proxies** — CORS-safe API calls for YouTube Search and Cobalt

## Tech Stack

- Next.js / React
- Web Audio API
- IndexedDB
- Vercel Serverless Functions
- Spotify Web API
- YouTube Data API

## Running Locally

```bash
npm install
npm run dev
```
