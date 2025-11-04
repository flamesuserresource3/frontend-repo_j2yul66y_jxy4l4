import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white max-w-2xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Videomaker Sportivo • Fotografo • Content per brand
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Azione ad alta intensità. Storytelling che corre alla tua velocità.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Dalla pista al campo: highlight, spot pubblicitari e contenuti social che trasformano performance
            in emozioni. Riprese dinamiche, slow-mo, drone e sound design per massima adrenalina.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
              Guarda il portfolio <ArrowRight size={16} />
            </a>
            <a href="#contatti" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
              Pianifica il tuo shooting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
