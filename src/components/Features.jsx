import { Check, Shield, Zap, Droplets, Compass } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sapphire Crystal",
    desc: "Scratch-resistant clarity that lasts a lifetime.",
  },
  {
    icon: Droplets,
    title: "100m Water Resistance",
    desc: "Built for everyday life, rain to swim.",
  },
  {
    icon: Zap,
    title: "Automatic Movement",
    desc: "Self-winding precision with 42h power reserve.",
  },
  {
    icon: Compass,
    title: "316L Steel",
    desc: "Surgical-grade durability with mirror finish.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* Shiny gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.1),rgba(6,182,212,0.08),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Precision engineering. Everyday luxury.
          </h2>
          <p className="mt-3 text-white/70">
            We obsess over the details so you can enjoy the moment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition group-hover:ring-white/10" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-white/60">
          <Check className="h-4 w-4" /> 5-year international warranty
          <span className="mx-2">•</span>
          <Check className="h-4 w-4" /> Free worldwide shipping
          <span className="mx-2">•</span>
          <Check className="h-4 w-4" /> 30-day returns
        </div>
      </div>
    </section>
  );
}
