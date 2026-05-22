"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BuildLog {
  id: number;
  status: string;
  build_type: string;
  xp_gained: number;
  created_at: string;
  kit: {
    model_name: string;
    grade: string;
  };
}

export default function HangarPage() {
  const [builds, setBuilds] = useState<BuildLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    const fetchBuilds = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/builds", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setBuilds(data);
        } else if (res.status === 401) {
          localStorage.removeItem("auth_token");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Failed to fetch builds", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBuilds();
  }, []);

  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop pb-24 md:pb-32">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">Personal Hangar</h1>
        </div>
        <Link href="/hangar/deploy" className="cyber-clip bg-primary text-on-primary px-6 py-2 font-data-display text-data-display uppercase hover:bg-primary-fixed hover:glow-primary transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">add</span> Deploy Kit
        </Link>
      </div>

      <div className="hud-border bg-surface-container-low p-panel-padding min-h-[50vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <span className="material-symbols-outlined text-primary text-6xl animate-spin mb-4">refresh</span>
            <h2 className="font-headline-md text-on-surface-variant uppercase">Loading Database...</h2>
          </div>
        ) : builds.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <span className="material-symbols-outlined text-outline-variant text-6xl mb-4">construction</span>
            <h2 className="font-headline-md text-on-surface-variant uppercase">Hangar Empty</h2>
            <p className="text-on-surface-variant mt-2">Deploy your first kit to start earning XP.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <div key={build.id} className="bg-surface-container border border-outline-variant/50 p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">rocket</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-surface-container-highest px-2 py-0.5 rounded text-xs font-data-display text-primary border border-primary/30">{build.kit.grade}</span>
                    <span className="bg-tertiary-container/20 px-2 py-0.5 rounded text-xs font-data-display text-tertiary border border-tertiary/30">{build.status}</span>
                  </div>
                  <h3 className="font-data-display text-xl text-on-surface uppercase mt-2">{build.kit.model_name}</h3>
                </div>

                <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-on-surface-variant mb-1 uppercase font-data-display">{build.build_type}</div>
                    <div className="font-data-display text-primary">+{build.xp_gained} XP</div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary p-2">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
