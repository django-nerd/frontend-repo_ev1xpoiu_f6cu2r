import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-black/90 text-white px-3 py-1 text-xs font-medium mb-5">Available for opportunities</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Building modern, interactive products with care and craft
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg">
            I’m a developer and designer focused on creating clean, performant, and playful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-black transition-colors">
              <span>See my work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
