"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface OfficialKit {
  id: number;
  model_name: string;
  grade: string;
  series_universe: string | null;
  release_year: number | null;
}

export default function DeployHangarPage() {
  const [kitName, setKitName] = useState("");
  const [selectedKitId, setSelectedKitId] = useState<number | null>(null);
  const [grade, setGrade] = useState("HG");
  const [buildType, setBuildType] = useState("Straight Build");
  
  // Autocomplete state
  const [searchResults, setSearchResults] = useState<OfficialKit[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Derived states
  const baseXP = grade === "PG" ? 1000 : grade === "MG" ? 500 : grade === "RG" ? 400 : grade === "HG" ? 200 : 100;
  const multiplier = buildType === "Custom Paint" ? 2.5 : buildType === "Detailed" ? 1.5 : 1.0;
  const projectedXP = Math.floor(baseXP * multiplier);

  // Fetch kits when user types
  useEffect(() => {
    const fetchKits = async () => {
      if (kitName.trim().length < 2) {
        setSearchResults([]);
        return;
      }
      
      // Don't search if we just selected from the dropdown
      if (selectedKitId) return;

      setIsSearching(true);
      try {
        const token = localStorage.getItem("auth_token");
        const res = await fetch(`http://127.0.0.1:8000/api/kits?search=${encodeURIComponent(kitName)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          }
        });
        
        if (res.ok) {
          const data = await res.json();
          setSearchResults(data);
          setShowDropdown(data.length > 0);
        }
      } catch (err) {
        console.error("Failed to fetch kits", err);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(fetchKits, 300);
    return () => clearTimeout(debounceTimer);
  }, [kitName, selectedKitId]);

  // Handle clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectKit = (kit: OfficialKit) => {
    setKitName(kit.model_name);
    setGrade(kit.grade);
    setSelectedKitId(kit.id);
    setShowDropdown(false);
  };

  const handleKitNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKitName(e.target.value);
    setSelectedKitId(null); // Reset official selection if they edit it manually
    setShowDropdown(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kitName) return alert("Please enter a kit designation.");
    
    const token = localStorage.getItem("auth_token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload: any = {
        kit_name: kitName,
        grade: grade,
        build_type: buildType,
        base_xp: baseXP,
        projected_xp: projectedXP
      };

      if (selectedKitId) {
        payload.kit_id = selectedKitId;
      }

      const res = await fetch("http://127.0.0.1:8000/api/builds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        const data = await res.json();
        alert(`Build deployed successfully! Pilot XP is now: ${data.user_xp}`);
        setKitName("");
        setSelectedKitId(null);
      } else if (res.status === 401) {
        localStorage.removeItem("auth_token");
        window.location.href = "/login";
      } else {
        alert("Failed to deploy build.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop pb-24 md:pb-32">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">Deploy New Build</h1>
        </div>
        <Link href="/hangar" className="cyber-clip bg-surface-container-high text-on-surface border border-outline-variant px-6 py-2 font-data-display text-data-display uppercase hover:bg-surface-container-highest transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Return
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="hud-border bg-surface-container-low p-panel-padding flex flex-col gap-6">
            
            {/* Kit Designation Autocomplete */}
            <div className="relative" ref={dropdownRef}>
              <label className="block font-label-md text-on-surface-variant mb-2 uppercase">Gunpla Designation</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50">search</span>
                <input 
                  type="text" 
                  value={kitName}
                  onChange={handleKitNameChange}
                  onFocus={() => { if (searchResults.length > 0) setShowDropdown(true); }}
                  placeholder="e.g. RX-78-2 Gundam"
                  className="w-full bg-surface-container border border-outline-variant rounded p-3 pl-10 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
                />
                {isSearching && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary animate-spin">refresh</span>
                )}
              </div>
              
              {/* Autocomplete Dropdown */}
              {showDropdown && kitName.length >= 2 && !selectedKitId && (
                <div className="absolute z-10 w-full mt-1 bg-surface-container-high border border-outline-variant shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(kit => (
                      <div 
                        key={kit.id} 
                        onClick={() => handleSelectKit(kit)}
                        className="px-4 py-3 hover:bg-primary/20 cursor-pointer border-b border-outline-variant/30 last:border-0 flex justify-between items-center transition-colors"
                      >
                        <div>
                          <div className="font-data-display text-on-surface uppercase">{kit.model_name}</div>
                          <div className="text-xs text-on-surface-variant">{kit.series_universe || 'Unknown Universe'} • {kit.release_year || 'Unknown Year'}</div>
                        </div>
                        <span className="bg-surface-container-highest px-2 py-0.5 text-xs font-data-display text-primary border border-primary/30">
                          {kit.grade}
                        </span>
                      </div>
                    ))
                  ) : (
                    !isSearching && (
                      <div className="px-4 py-3 text-sm text-on-surface-variant">
                        No official kit found. You can still deploy this as a custom build.
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Grade Selection */}
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2 uppercase">Grade Classification</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["SD", "Entry Grade", "HG", "RG", "MG", "PG", "MegaSize"].map(g => (
                  <button 
                    key={g} 
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`p-3 border rounded text-sm uppercase font-data-display transition-colors ${grade === g ? 'bg-primary/20 border-primary text-primary' : 'bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary/50'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Build Type */}
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2 uppercase">Build Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["Straight Build", "Detailed", "Custom Paint"].map(bt => (
                  <button 
                    key={bt} 
                    type="button"
                    onClick={() => setBuildType(bt)}
                    className={`p-3 border rounded text-sm uppercase font-data-display transition-colors ${buildType === bt ? 'bg-secondary/20 border-secondary text-secondary' : 'bg-surface-container border-outline-variant text-on-surface-variant hover:border-secondary/50'}`}
                  >
                    {bt}
                  </button>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                * Straight Build (1.0x XP) | Detailed: Panel line & Decals (1.5x XP) | Custom Paint (2.5x XP)
              </p>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-outline-variant/50">
              <button type="submit" className="cyber-clip w-full bg-primary text-on-primary p-4 font-data-display text-data-display uppercase hover:bg-primary-fixed hover:glow-primary transition-all flex justify-center items-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span> Initiate Deployment
              </button>
            </div>
          </form>
        </div>

        {/* Tactical Summary Panel */}
        <div className="lg:col-span-1">
          <div className="bg-surface-container-low border-l-2 border-primary p-6 sticky top-24">
            <h3 className="font-headline-sm text-on-surface uppercase mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-2">
              <span className="material-symbols-outlined text-primary">analytics</span> Tactical Summary
            </h3>
            
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xs text-on-surface-variant uppercase font-data-display mb-1">Kit Designation</div>
                <div className="text-lg text-on-surface font-medium">{kitName || "Awaiting Input..."}</div>
                {selectedKitId && (
                  <div className="inline-flex items-center gap-1 mt-1 text-xs text-[#a8c8ff] bg-[#0055a5]/20 px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[10px]">verified</span> Official Database Match
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-on-surface-variant uppercase font-data-display mb-1">Base XP</div>
                  <div className="text-on-surface">{baseXP}</div>
                </div>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase font-data-display mb-1">Multiplier</div>
                  <div className="text-secondary">x{multiplier}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/50">
                <div className="text-xs text-on-surface-variant uppercase font-data-display mb-1">Projected XP Gain</div>
                <div className="text-4xl font-data-display text-primary glow-primary-text">+{projectedXP}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
