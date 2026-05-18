import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-sans)]">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green glow-cyan">
          GundamBuilder.io
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          The ultimate digital hangar for Gunpla builders. Level up your backlog, track your progress, and earn achievements in the global Hall of Fame.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
          <div className="bg-panel-bg p-6 rounded-2xl border border-slate-800 hover:border-neon-cyan transition-colors glow-cyan">
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Hangar Log</h3>
            <p className="text-sm text-slate-400">Manage your backlog, track builds in progress, and log your completed masterpieces.</p>
          </div>
          <div className="bg-panel-bg p-6 rounded-2xl border border-slate-800 hover:border-neon-green transition-colors glow-green">
            <h3 className="text-xl font-bold text-neon-green mb-2">Pilot Rank</h3>
            <p className="text-sm text-slate-400">Earn XP based on kit grade and build type. Climb the ranks from Recruit to Ace Pilot.</p>
          </div>
          <div className="bg-panel-bg p-6 rounded-2xl border border-slate-800 hover:border-neon-cyan transition-colors glow-cyan">
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Hall of Fame</h3>
            <p className="text-sm text-slate-400">Compete on the global leaderboard. Show off your faction loyalty and achievements.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-12">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-neon-cyan text-background gap-2 hover:bg-[#0891b2] text-sm sm:text-base h-10 sm:h-12 px-8 font-bold glow-cyan"
            href="/pilot/onboarding"
          >
            Start Your Journey
          </a>
          <a
            className="rounded-full border border-solid border-neon-cyan transition-colors flex items-center justify-center hover:bg-slate-800 hover:text-neon-cyan text-sm sm:text-base h-10 sm:h-12 px-8 font-bold"
            href="/leaderboard"
          >
            View Leaderboard
          </a>
        </div>
      </main>
      <footer className="mt-auto pt-16 flex gap-6 flex-wrap items-center justify-center text-sm text-slate-500">
        <p>Built for the Gunpla Community.</p>
      </footer>
    </div>
  );
}
