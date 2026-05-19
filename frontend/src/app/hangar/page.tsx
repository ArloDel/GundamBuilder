export default function HangarPage() {
  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop pb-24 md:pb-32">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
        <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">Personal Hangar</h1>
      </div>
      <div className="hud-border bg-surface-container-low p-panel-padding min-h-[50vh] flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-outline-variant text-6xl mb-4">construction</span>
        <h2 className="font-headline-md text-on-surface-variant uppercase">Hangar Database Initializing...</h2>
        <p className="text-on-surface-variant mt-2">Connect to your build log database to view your mobile suits.</p>
      </div>
    </main>
  );
}
