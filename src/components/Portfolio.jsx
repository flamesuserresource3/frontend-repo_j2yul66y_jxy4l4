import React from 'react';

const items = [
  {
    title: 'Fashion Editorial',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Live Performance',
    img: 'https://images.unsplash.com/photo-1521334726092-b509a19597cc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Product Still Life',
    img: 'https://images.unsplash.com/photo-1491554150234-9726bafada26?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Documentary Frame',
    img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Brand Campaign',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Portrait Series',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Portfolio</h2>
            <p className="mt-2 text-white/70">Una selezione di lavori tra video, fotografia e design.</p>
          </div>
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
