const products = [
  {
    name: "Nova Aurora",
    color: "Steel/Black",
    price: "$649",
    img: "https://images.unsplash.com/photo-1534766555764-ce878a5e3af2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Nova Eclipse",
    color: "Rose/Onyx",
    price: "$699",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Nova Glacier",
    color: "Steel/Arctic",
    price: "$629",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-[#0b0b13]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Nova Collection
            </h2>
            <p className="mt-3 text-white/70">
              Three signature styles designed for any occasion.
            </p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 sm:inline-flex"
          >
            View all watches
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-3xl bg-white/5 shadow-sm ring-1 ring-white/10 backdrop-blur">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                    <p className="text-sm text-white/60">{p.color}</p>
                  </div>
                  <p className="text-base font-semibold text-white">{p.price}</p>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 py-2.5 text-sm font-medium text-white transition hover:brightness-110">
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
