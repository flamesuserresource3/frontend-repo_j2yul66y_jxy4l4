import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuovo progetto da ${name || 'Contatto Portfolio'}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:hello@portfolio.studio?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contatti" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Parliamo del tuo progetto</h2>
            <p className="mt-2 text-white/70">
              Raccontami obiettivi, target e mood: costruiremo insieme un visual su misura.
            </p>
            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><Mail size={18} /> hello@portfolio.studio</p>
              <p className="flex items-center gap-2"><Phone size={18} /> +39 320 000 0000</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> Milano, Italia</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Messaggio</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30"
                  placeholder="Raccontami l'idea, le tempistiche e il budget"
                />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 font-semibold text-black transition hover:bg-white/90">
                Invia richiesta
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Portfolio Studio — Tutti i diritti riservati.</p>
      </div>
    </section>
  );
}
