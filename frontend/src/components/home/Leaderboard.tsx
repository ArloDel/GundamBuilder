"use client";

import { useEffect, useState } from "react";

interface Pilot {
  id: number;
  username: string;
  current_xp: number;
  level: number;
  faction: string;
}

export default function Leaderboard() {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/leaderboard?limit=4", {
          headers: {
            Accept: "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setPilots(data);
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);

  const getRankColor = (index: number) => {
    switch (index) {
      case 0: return { border: "border-tertiary", text: "text-tertiary" }; // Gold
      case 1: return { border: "border-outline", text: "text-outline" }; // Silver
      case 2: return { border: "border-[#cd7f32]", text: "text-[#cd7f32]" }; // Bronze
      default: return { border: "border-outline-variant", text: "text-outline-variant" }; // Default
    }
  };

  return (
    <section className="hud-border bg-surface-container-lowest p-panel-padding">
      <div className="flex justify-between items-end mb-8 border-b border-outline-variant/50 pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary animate-pulse">public</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">Global Network</h2>
        </div>
        <a className="font-data-display text-label-sm text-primary hover:text-primary-fixed uppercase flex items-center gap-1" href="#">
          View Full Intel <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      
      {/* Mini Scroll Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 py-8 text-center text-on-surface-variant animate-pulse font-data-display text-sm uppercase">
            Decrypting global signals...
          </div>
        ) : pilots.length === 0 ? (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 py-8 text-center text-outline text-sm uppercase font-data-display">
            No pilot data found in network.
          </div>
        ) : (
          pilots.map((pilot, index) => {
            const colors = getRankColor(index);
            return (
              <div key={pilot.id} className={`bg-surface-container p-4 border-l-2 ${colors.border} hover:bg-surface-container-high transition-colors flex items-center gap-4`}>
                <div className={`font-data-display ${colors.text} text-xl w-8 text-center`}>#{index + 1}</div>
                <div className={`w-10 h-10 rounded-sm overflow-hidden border ${colors.border}/50 bg-surface-variant flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                </div>
                <div>
                  <div className="font-data-display text-data-display text-on-surface uppercase truncate max-w-[120px]" title={pilot.username}>{pilot.username}</div>
                  <div className="font-data-display text-label-sm text-on-surface-variant">{pilot.current_xp.toLocaleString()} XP</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
