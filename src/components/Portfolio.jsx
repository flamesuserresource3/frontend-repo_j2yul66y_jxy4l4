import React from 'react';

const items = [
  {
    title: 'Track Day — Superbike',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Football Night Highlights',
    img: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Basketball — Courtside',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Rally — Dust & Speed',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Athletics — Sprint Focus',
    img: 'https://images.unsplash.com/photo-1502810190503-8303352d95cd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Cycling — Mountain Stage',
    img: 'https://images.unsplash.com/photo-1508606572321-901ea443707f?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-white/70">Selezione di lavori sportivi: velocità, energia e precisione.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={item.title} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <figcaption className="flex items-center justify-between p-4 text-sm text-white/80">
                <span>{item.title}</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs">View</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
