# Starwise Landing Page

Landing page for **Starwise** - an AI-powered interview preparation platform that helps candidates structure their answers using the STAR method.

**Production:** [getstarwise.com](https://getstarwise.com)

## About

Starwise helps candidates answer interviews with clarity and confidence. The platform offers:

- Answer structuring with the STAR method (Situation, Task, Action, Result)
- AI-powered smart feedback
- Real interview simulations
- Progress tracking

## Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **next-intl** - Internationalization (EN/PT)
- **Mixpanel** - Analytics

## Project Structure

```
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── page.tsx        # Main landing page
│   │   ├── waitlist/       # Waitlist page
│   │   ├── privacy-policy/ # Privacy policy
│   │   └── terms-of-use/   # Terms of use
│   └── globals.css         # Global styles
├── components/             # React components
├── messages/               # Translation files (en.json, pt.json)
├── lib/                    # Utilities (Mixpanel)
├── public/                 # Static assets
└── scripts/                # Automation scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
make install
# or
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
NEXT_PUBLIC_GOOGLE_FORM_ID=your_form_id
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID=your_entry_id
```

### Development

```bash
# Start development server
make dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Production build
make build
# or
npm run build

# Start production server
make start
# or
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `make install` | Install dependencies |
| `make dev` | Start development server |
| `make build` | Production build |
| `make start` | Start production server |
| `make lint` | Run ESLint |
| `make replace-iphone` | Generate iPhone mockups |

## Internationalization

The project supports two languages:

- **English** (`/en`) - Default
- **Portuguese** (`/pt`)

Translations are located in `messages/en.json` and `messages/pt.json`.

## Landing Page Sections

1. **Hero** - Main headline with CTA
2. **Stats** - Impact statistics
3. **Benefits** - 4 main benefits
4. **Features** - App features
5. **Advanced Capabilities** - Advanced features
6. **Pricing** - Free and Premium plans
7. **Testimonials** - User testimonials
8. **FAQ** - Frequently asked questions
9. **Download** - App Store and Google Play links

## Design System

- **Theme:** Dark mode
- **Primary color:** Green (#32BF5D)
- **Fonts:** Inter, Inter Tight, Instrument Sans
- **Animations:** Framer Motion

## License

All rights reserved.
