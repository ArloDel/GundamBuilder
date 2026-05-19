"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeployHangarPage() {
  const [kitName, setKitName] = useState("");
  const [grade, setGrade] = useState("HG");
  const [buildType, setBuildType] = useState("Straight Build");

  // Simple simulated XP calculation for UI preview
  const baseXP = { SD: 100, HG: 250, RG: 400, MG: 500, PG: 1000, MegaSize: 800 };
  const multiplier = {
    "Straight Build": 1,
    "Panel Lined": 1.2,
    "Decals": 1.5,
    "Custom Paint": 2.5,
  };
  
  const currentBase = baseXP[grade as keyof typeof baseXP] || 250;
  const currentMultiplier = multiplier[buildType as keyof typeof multiplier] || 1;
  const projectedXP = Math.floor(currentBase * currentMultiplier);

  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop pb-24 md:pb-32 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
        <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">Deploy New Build</h1>
      </div>

      <div className="hud-border bg-surface-container-low p-panel-padding relative">
        <div className="absolute top-4 right-4 font-data-display text-label-sm text-primary/50">SYS.LOG // DEPLOYMENT</div>
        
        <form className="flex flex-col gap-8 mt-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Kit Identification */}
          <section className="flex flex-col gap-4">
            <h2 className="font-data-display text-data-display text-primary uppercase border-b border-outline-variant/50 pb-2">01. Identification</h2>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Model Name / Designation</label>
              <input 
                type="text" 
                value={kitName}
                onChange={(e) => setKitName(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
                placeholder="e.g. RX-78-2 Gundam, MS-06 Zaku II..."
              />
            </div>
            
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Grade Classification</label>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {["SD", "HG", "RG", "MG", "PG", "MegaSize"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`py-3 text-center rounded border font-data-display transition-all ${
                      grade === g 
                        ? "bg-primary-container/20 border-primary text-primary shadow-[0_0_10px_rgba(168,200,255,0.2)]" 
                        : "bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Refinement Level */}
          <section className="flex flex-col gap-4">
            <h2 className="font-data-display text-data-display text-tertiary uppercase border-b border-outline-variant/50 pb-2">02. Refinement Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Straight Build", "Panel Lined", "Decals", "Custom Paint"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBuildType(type)}
                  className={`p-4 text-left rounded border flex items-center justify-between transition-all ${
                    buildType === type 
                      ? "bg-tertiary-container/10 border-tertiary text-tertiary shadow-[0_0_10px_rgba(255,179,175,0.1)]" 
                      : "bg-surface-container border-outline-variant text-on-surface-variant hover:border-tertiary/50"
                  }`}
                >
                  <span className="font-body-md font-medium">{type}</span>
                  {buildType === type && <span className="material-symbols-outlined text-tertiary">check_circle</span>}
                </button>
              ))}
            </div>
          </section>

          {/* XP Preview */}
          <section className="bg-surface-container-highest border border-outline-variant rounded p-6 mt-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,200,255,0.03)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-data-display text-label-sm text-on-surface-variant uppercase mb-1">Projected Reward</div>
                <div className="font-headline-lg text-4xl text-primary">{projectedXP} XP</div>
                <div className="text-sm text-on-surface-variant mt-1">
                  Base: {currentBase} &times; Multiplier: {currentMultiplier}x
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button type="submit" className="cyber-clip w-full md:w-auto bg-primary text-on-primary px-10 py-4 font-data-display text-data-display uppercase hover:bg-primary-fixed hover:glow-primary transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">add_task</span>
                  Log to Hangar
                </button>
              </div>
            </div>
          </section>

        </form>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link href="/hangar" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-data-display uppercase text-sm">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Return to Hangar
        </Link>
      </div>
    </main>
  );
}
