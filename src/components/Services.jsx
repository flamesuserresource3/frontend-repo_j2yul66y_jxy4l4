import React from 'react';
import { Camera, Film, PenTool } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Fotografia',
    desc: 'Ritratti, eventi, prodotti e reportage. Luci, composizione e post-produzione per immagini che restano.'
  },
  {
    icon: Film,
    title: 'Video Production',
    desc: 'Dalla pre-produzione al montaggio finale. Spot, videoclip, aftermovie, documentari e contenuti social.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Identità visiva, copertine, layout e contenuti digitali. Un design pulito, moderno e riconoscibile.'
  }
];

export default function Services() {
  return (
    <section id="servizi" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Servizi</h2>
            <p className="mt-2 text-white/70">
              Un flusso completo: ideazione, produzione e consegna. Perfetto per brand e creator.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
