export default function MissionBriefing() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-24">
      {/* Mission Briefing (XP System) */}
      <div className="lg:col-span-8 hud-border bg-surface-container-low p-panel-padding relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-9xl text-primary">insights</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-tertiary">assignment</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">Mission Briefing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-surface-container border border-outline-variant/50 p-4 flex flex-col gap-2 hover:border-primary/50 transition-colors">
            <div className="font-data-display text-label-sm text-primary mb-1">01 // ASSEMBLE</div>
            <h3 className="font-data-display text-data-display text-on-surface uppercase">Log Builds</h3>
            <p className="text-on-surface-variant text-sm mt-auto">Register HG, MG, and PG kits into your digital hangar. Each grade yields base XP.</p>
          </div>
          <div className="bg-surface-container border border-outline-variant/50 p-4 flex flex-col gap-2 hover:border-tertiary/50 transition-colors">
            <div className="font-data-display text-label-sm text-tertiary mb-1">02 // REFINE</div>
            <h3 className="font-data-display text-data-display text-on-surface uppercase">Custom Work</h3>
            <p className="text-on-surface-variant text-sm mt-auto">Panel lining, decals, and custom paint jobs multiply your mission payout.</p>
          </div>
          <div className="bg-surface-container border border-outline-variant/50 p-4 flex flex-col gap-2 hover:border-secondary/50 transition-colors">
            <div className="font-data-display text-label-sm text-secondary mb-1">03 // DOMINATE</div>
            <h3 className="font-data-display text-data-display text-on-surface uppercase">Rank Up</h3>
            <p className="text-on-surface-variant text-sm mt-auto">Climb from Trainee to ACE Pilot. Unlock exclusive digital badges and faction perks.</p>
          </div>
        </div>
        {/* XP Progress Demo */}
        <div className="mt-8 pt-6 border-t border-outline-variant/30">
          <div className="flex justify-between items-end mb-2">
            <span className="font-data-display text-label-sm text-on-surface-variant uppercase">Current Rank: Ensign</span>
            <span className="font-data-display text-data-display text-primary">8,450 / 10,000 XP</span>
          </div>
          <div className="h-4 bg-surface-container-highest flex gap-1 p-0.5 border border-outline-variant">
            {/* Segmented Progress Bar */}
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-primary"></div>
            <div className="h-full w-1/12 bg-surface-container"></div>
            <div className="h-full w-1/12 bg-surface-container"></div>
            <div className="h-full w-1/12 bg-surface-container"></div>
            <div className="h-full w-1/12 bg-surface-container"></div>
          </div>
        </div>
      </div>
      {/* Join a Faction */}
      <div className="lg:col-span-4 hud-border bg-surface-container-low p-panel-padding flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-secondary">group</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">Enlist</h2>
        </div>
        <p className="text-on-surface-variant text-sm mb-6">Pledge allegiance to a faction. Your collective build points contribute to global seasonal campaigns.</p>
        <div className="flex flex-col gap-4 mt-auto">
          {/* Earth Federation (Blue) */}
          <button className="cyber-clip w-full bg-surface-container border border-[#0055a5] p-4 flex items-center justify-between group hover:bg-[#0055a5]/20 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0055a5] flex items-center justify-center text-white font-data-display text-xs">E.F.</div>
              <span className="font-data-display text-data-display text-on-surface uppercase group-hover:text-[#a8c8ff]">Earth Federation</span>
            </div>
            <span className="material-symbols-outlined text-[#a8c8ff] opacity-0 group-hover:opacity-100 transition-opacity">add</span>
          </button>
          {/* Zeon (Red) */}
          <button className="cyber-clip w-full bg-surface-container border border-[#e4042b] p-4 flex items-center justify-between group hover:bg-[#e4042b]/20 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e4042b] flex items-center justify-center text-white font-data-display text-xs">Z</div>
              <span className="font-data-display text-data-display text-on-surface uppercase group-hover:text-[#ffb3af]">Principality of Zeon</span>
            </div>
            <span className="material-symbols-outlined text-[#ffb3af] opacity-0 group-hover:opacity-100 transition-opacity">add</span>
          </button>
          {/* Celestial Being (Green - Custom Accent) */}
          <button className="cyber-clip w-full bg-surface-container border border-[#10b981] p-4 flex items-center justify-between group hover:bg-[#10b981]/20 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#10b981] flex items-center justify-center text-white font-data-display text-xs">C.B.</div>
              <span className="font-data-display text-data-display text-on-surface uppercase group-hover:text-[#6ee7b7]">Celestial Being</span>
            </div>
            <span className="material-symbols-outlined text-[#6ee7b7] opacity-0 group-hover:opacity-100 transition-opacity">add</span>
          </button>
        </div>
      </div>
    </section>
  );
}
