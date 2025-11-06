import Hero from "./components/Hero";
import Features from "./components/Features";
import Collection from "./components/Collection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b13] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b13]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-sm">N</span>
            <span className="text-lg font-semibold">Nova Watches</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#collection">Collection</a>
            <a className="hover:text-white" href="#testimonials">Reviews</a>
          </nav>
          <a
            href="#collection"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white transition sm:inline-flex"
          >
            <span className="relative inline-flex items-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-90" />
              <span className="relative z-10 px-4">Shop now</span>
            </span>
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Features />
        <Collection />
        <Testimonials />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b13]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Nova Watches. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
