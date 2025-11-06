import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline scene as main visual */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative shiny gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(900px_700px_at_90%_80%,rgba(59,130,246,0.15),transparent)]" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto flex min-h-[80vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-violet-300" />
              New Collection • 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Time, perfected.
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Meet the Nova Series
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              Crafted with sapphire crystal, 316L steel, and automatic movement. Designed for a bold, futuristic aesthetic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#collection"
                className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-white transition focus:outline-none"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-90" />
                <span className="absolute inset-0 rounded-full bg-white/30 mix-blend-overlay [mask-image:radial-gradient(120px_50px_at_20%_20%,black,transparent_60%)]" />
                <span className="relative z-10 font-medium">Shop the Collection</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 transition hover:bg-white/10"
              >
                Explore Features
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-4 text-sm text-white/60"
            >
              Free 48h shipping • 5-year warranty • Easy returns
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
