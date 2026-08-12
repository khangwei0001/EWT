# Web Screenshot Tool

A lightweight screenshot utility using Puppeteer for capturing full-page website screenshots at 1920×1080. Automatically scrolls the page to trigger scroll-based animations and lazy-loaded content before capturing.

## Setup

1. Copy this folder into your project (or any directory)
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Basic screenshot
```bash
npm run screenshot http://localhost:3000
```

### Screenshot with label
```bash
npm run screenshot http://localhost:3000 my-feature
```

This saves as: `screenshot-1-my-feature.png`

### Direct node usage
```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 homepage
```

### Options

| Flag | Default | What it does |
|---|---|---|
| `--width=390` | 1920 | Viewport width — how you check a phone layout |
| `--height=844` | 1080 | Viewport height |
| `--viewport` | off | Capture one screen instead of the whole scroll. The only way to judge anything that fills the fold: a hero, a page header |
| `--delay=2500` | 0 | Wait this many ms before the shutter. The only way to catch a timed animation mid-cycle |

```bash
node screenshot.mjs http://localhost:3000 phone --width=390 --height=844
node screenshot.mjs http://localhost:3000 hero --viewport --delay=2500
```

## How it works

- Launches a headless browser and navigates to your URL
- Waits for network idle (`waitUntil: 'networkidle2'`)
- Scrolls through the entire page in 80vh increments with 120ms pauses
- Returns to top and waits 400ms for final renders
- Waits out `--delay`, if given
- Captures the page
- Saves to `./temporary screenshots/` with auto-incrementing numbering

## Screenshots directory

All screenshots are saved to `./temporary screenshots/` (created automatically on first use). Files are auto-numbered and never overwritten:
- `screenshot-1.png`
- `screenshot-2-homepage.png`
- `screenshot-3-mobile-view.png`

## Requirements

- Node.js 16+
- Internet connectivity (Puppeteer downloads Chromium on first install)
