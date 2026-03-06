# AdaVerse - AI-Powered Computing Pioneer Experience

An immersive, interactive web experience celebrating Ada Lovelace and women pioneers in computing technology.

## Features

### AI-Powered Interactions
- **Talk to Ada** - Converse with an AI-powered Ada Lovelace chatbot powered by OpenAI
- **Story Generator** - Generate inspiring tech stories narrated from Ada's perspective
- Contextual responses about computing, mathematics, and technological philosophy

### Advanced Visualizations
- **Particle Background** - Dynamic canvas-based particle system with connection visualization
- **Algorithm Lab** - Interactive visualizations of algorithms (Fibonacci, Prime Numbers, Sorting)
- **3D Analytical Engine** - Canvas-based interactive visualization of Babbage's Analytical Engine with rotating gears

### Cinematic Timeline
- Scroll-triggered animations with Framer Motion
- Ada's life milestones from 1815-1852 plus modern AI revolution
- Responsive layout with glassmorphic design elements

### Women in Tech Gallery
- Showcase of computing pioneers including Ada Lovelace, Grace Hopper, and Hedy Lamarr
- Detailed contributions and impact cards
- Hover animations and interactive elements

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **UI/Animation**: Framer Motion for smooth animations
- **Graphics**: Canvas API for particle effects and algorithm visualization
- **Styling**: Tailwind CSS v4 with custom design tokens
- **AI**: OpenAI API for intelligent conversations
- **State Management**: React hooks with client-side state
- **Image Optimization**: Next.js Image component for hero assets

## Installation & Setup

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- OpenAI API key

### Steps

1. **Clone or Download the Project**
   ```bash
   git clone [your-repo] && cd adaverse
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Add Environment Variables**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
adaverse/
├── app/
│   ├── api/
│   │   ├── chat/          # Chat API endpoint
│   │   └── story/         # Story generation endpoint
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Design tokens & theme
│   └── page.tsx           # Main page with all sections
├── components/
│   ├── ai/
│   │   ├── ada-chat.tsx   # Chat interface
│   │   └── story-generator.tsx
│   ├── algorithm/
│   │   └── algorithm-visualizer.tsx
│   ├── engine/
│   │   └── analytical-engine.tsx
│   ├── hero/
│   │   ├── particle-background.tsx
│   │   └── hero.tsx
│   ├── timeline/
│   │   └── cinematic-timeline.tsx
│   ├── navbar.tsx
│   ├── women-in-tech.tsx
│   ├── footer.tsx
│   └── ui/
│       └── glass-card.tsx
├── lib/
│   └── openai.ts          # OpenAI utilities
└── public/
    └── ada-portrait.jpg   # Ada portrait image
```

## Key Components

### Ada Chat (`components/ai/ada-chat.tsx`)
Interactive chat interface where users can ask Ada questions about computing and mathematics. Uses streaming API calls to OpenAI.

### Algorithm Visualizer (`components/algorithm/algorithm-visualizer.tsx`)
Canvas-based visualizations showing Fibonacci sequences, prime numbers, and sorting algorithms with smooth animated bar charts.

### Analytical Engine (`components/engine/analytical-engine.tsx`)
Interactive canvas visualization of Babbage's Analytical Engine with animated rotating gears and mechanical simulation.

### Particle Background (`components/hero/particle-background.tsx`)
Canvas-based particle system with connection visualization for the hero section backdrop.

### Cinematic Timeline (`components/timeline/cinematic-timeline.tsx`)
Scroll-triggered animations showing Ada's life journey with Framer Motion's scroll listeners.

## Design System

### Color Palette
- **Primary**: `#a78bfa` (Purple - Ada's signature color)
- **Secondary**: `#ec4899` (Pink - Energy & innovation)
- **Accent**: `#f97316` (Orange - Warmth & inspiration)
- **Background**: `#0f172a` (Deep slate for contrast)
- **Surface**: `#1e293b` (Card backgrounds)

### Typography
- **Headings**: Geist (modern, clean)
- **Body**: Geist (consistent and readable)

## API Routes

### POST `/api/chat`
Sends a message to Ada and receives her response.
```json
{
  "message": "What is the Analytical Engine?"
}
```

### POST `/api/story`
Generates an inspiring story about a given topic.
```json
{
  "topic": "Women pioneers in technology"
}
```

## Performance Optimizations

- **Client-side Rendering**: Canvas animations and particle effects render client-side for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Optimized Images**: Next.js Image component for hero portrait
- **Lazy Loading**: Scroll-triggered animations reduce initial paint
- **Efficient Canvas**: RequestAnimationFrame for smooth 60fps animations

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Canvas support required for visualizations

## Deployment

### Deploy to Vercel
1. Push your code to GitHub:
   ```bash
   git push origin main
   ```
2. Connect your repository to Vercel
3. Vercel auto-deploys on every push

### Configure Environment Variables on Vercel
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
4. Redeploy the application for changes to take effect

## Future Enhancements

- Voice input for Ada Chat using Web Speech API
- More historical figures with dedicated AI personalities
- Collaborative algorithm workspace
- Save and share created stories
- Dark/light theme toggle
- Multi-language support

## Credits

- **Ada Lovelace Portrait**: Generated with AI image synthesis
- **Design Inspiration**: Modern tech pioneers and mathematical elegance
- **Built with**: Next.js, React, Framer Motion, Canvas API, OpenAI

## Support

For issues or questions:
1. Check the DEPLOYMENT.md for deployment troubleshooting
2. Verify OPENAI_API_KEY is set in environment variables
3. Ensure Node.js 18+ is installed

## License

MIT - Feel free to use and modify for your projects.
