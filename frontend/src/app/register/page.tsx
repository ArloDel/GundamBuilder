"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faction, setFaction] = useState("Earth Federation");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, email, password, faction }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("auth_token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Force reload or redirect
        window.location.href = "/hangar";
      } else {
        setError(data.message || "Registration failed. Check inputs.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 px-margin-mobile md:px-margin-desktop pb-24">
      <div className="hud-border bg-surface-container-low p-8 w-full max-w-lg relative mt-8">
        <div className="absolute top-4 right-4 font-data-display text-label-sm text-secondary/50">SYS.AUTH // ENLIST</div>
        
        <div className="flex flex-col items-center mb-8">
          <span className="material-symbols-outlined text-secondary text-5xl mb-2">person_add</span>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">Pilot Enlistment</h1>
        </div>

        {error && (
          <div className="bg-error/10 border border-error text-error text-sm p-3 mb-6 rounded font-data-display flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">warning</span>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Callsign (Username)</label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md"
              placeholder="e.g. Amuro_R"
            />
          </div>

          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Email Designation</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md"
              placeholder="pilot@gundambuilder.io"
            />
          </div>
          
          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Access Code (Password)</label>
            <input 
              type="password" 
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Faction Allegiance</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFaction("Earth Federation")}
                className={`p-3 border rounded text-sm uppercase font-data-display transition-colors ${faction === "Earth Federation" ? "bg-[#0055a5]/20 border-[#0055a5] text-[#a8c8ff]" : "bg-surface-container border-outline-variant text-on-surface-variant"}`}
              >
                Earth Federation
              </button>
              <button
                type="button"
                onClick={() => setFaction("Zeon")}
                className={`p-3 border rounded text-sm uppercase font-data-display transition-colors ${faction === "Zeon" ? "bg-[#e4042b]/20 border-[#e4042b] text-[#ffb3af]" : "bg-surface-container border-outline-variant text-on-surface-variant"}`}
              >
                Principality of Zeon
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="cyber-clip w-full bg-secondary text-on-secondary px-4 py-4 mt-4 font-data-display text-data-display uppercase hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin">refresh</span> : <span className="material-symbols-outlined">how_to_reg</span>}
            {isLoading ? "Processing..." : "Complete Enlistment"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
          <p className="text-on-surface-variant text-sm">
            Already registered? <Link href="/login" className="text-secondary hover:underline uppercase font-data-display">Return to Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
