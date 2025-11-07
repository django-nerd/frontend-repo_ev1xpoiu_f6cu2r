import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-gray-900 text-lg">My Portfolio</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="/" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-black transition-colors">
              <span>Resume</span>
            </a>
          </nav>

          <button aria-label="Menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 text-sm text-gray-700">
              <a href="#projects" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Projects</a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Contact</a>
              <a href="/" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Resume</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
