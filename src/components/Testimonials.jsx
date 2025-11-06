import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ava K.",
    title: "Design Director",
    text: "The Nova is the perfect balance of presence and subtlety. The crystal is flawless and the movement is smooth.",
  },
  {
    name: "Daniel M.",
    title: "Product Manager",
    text: "Feels like a watch twice its price. I've worn it daily and it still looks brand new.",
  },
  {
    name: "Sasha R.",
    title: "Photographer",
    text: "Photographs beautifully in any light. The bracelet finish is exceptional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative">
      {/* soft shine */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-56 w-56 translate-x-1/4 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by customers worldwide
          </h2>
          <p className="mt-3 text-white/70">Real thoughts from real wearers.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-white/90">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium text-white">
                {r.name}
                <span className="ml-2 text-white/60">• {r.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
