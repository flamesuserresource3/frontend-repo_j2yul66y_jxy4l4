import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide">PORTFOLIO STUDIO</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#servizi">Servizi</a>
            <a className="hover:text-white" href="#portfolio">Portfolio</a>
            <a className="hover:text-white" href="#contatti">Contatti</a>
          </nav>
          <a href="#contatti" className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-white/90">Richiedi un preventivo</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
