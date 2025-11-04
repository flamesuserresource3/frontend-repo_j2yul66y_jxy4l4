import React from 'react';
import { Camera, Film, Trophy } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Sport Highlights',
    desc: 'Riprese a bordo campo e montaggi ad alta energia per match, gare e eventi live. Ritmo, tagli rapidi e color grading incisivo.'
  },
  {
    icon: Camera,
    title: 'Brand & Adv',
    desc: 'Spot e contenuti commerciali per team, atleti e sponsor. Script, shooting plan e consegna ottimizzata per social.'
  },
  {
    icon: Trophy,
    title: 'Atleti & Team Stories',
    desc: 'Ritratti, mini-doc e storytelling dietro le quinte: allenamenti, preparazione, mentalità vincente.'
  }
];

export default function Services() {
  return (
    <section id="servizi" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Servizi</h2>
          <p className="mt-2 text-white/70">
            Produzioni video e foto per sport e automotive: velocità, precisione e impatto visivo.
          </p>
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
