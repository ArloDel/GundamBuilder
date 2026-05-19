import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[819px] flex items-center justify-center mt-8 mb-24 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-lowest">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0tssbk3nYJmvZ0fZTflqKgbn7eo02W6I_-pyAbPTNzKf8loom7hGDlx5X0Nr2N1-XgMi9_baYC8CFHrCM8HerUhGNvvYtEsRydKnzQ3vxRQY_s17kgNTfJd2NUBOeAifEvYYqI22eyuuY4Sw8CmnHERvVSad0puNj28lLudRdHmdUIKrHo-XU7nKYrRr3avPsma-J_3xyUO8gZX92ygKo6KJcPahJKmrBERGVV4i5XJx4At7Yf4JlglgZjLqARQ8mpXNxBk_m3_io')" }}></div>
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#424751_1px,transparent_1px),linear-gradient(to_bottom,#424751_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container/80 border border-primary/50 text-primary font-label-sm text-label-sm mb-6 uppercase tracking-widest backdrop-blur-sm rounded">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          System Online
        </div>
        <h1 className="font-headline-xl text-[40px] md:text-headline-xl text-on-surface uppercase tracking-tighter mb-6 drop-shadow-lg">
          Transmute Your <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Backlog Into Glory</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl mb-10 border-l-2 border-primary pl-4 text-left font-body-md bg-surface/50 p-4 backdrop-blur-sm">
          Log your builds, earn XP, and climb the ranks. The ultimate progression system for mecha builders. Your plastic crack addiction is now a tactical advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/hangar/deploy" className="cyber-clip bg-primary text-on-primary px-8 py-4 font-data-display text-data-display uppercase hover:bg-primary-fixed hover:glow-primary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group">
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">rocket_launch</span>
            Deploy Now
          </Link>
          <Link href="/hangar" className="cyber-clip-reverse bg-surface-container-high border border-outline-variant text-on-surface px-8 py-4 font-data-display text-data-display uppercase hover:bg-surface-container-highest hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-xl">database</span>
            View Database
          </Link>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 font-data-display text-label-sm text-primary/50 hidden md:block">SYS.INIT // 0x4B2A</div>
      <div className="absolute bottom-4 right-4 font-data-display text-label-sm text-primary/50 hidden md:block">COORD // 34.0522° N, 118.2437° W</div>
    </section>
  );
}
