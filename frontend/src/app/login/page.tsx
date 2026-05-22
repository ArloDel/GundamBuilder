"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("auth_token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Force reload or redirect
        window.location.href = "/hangar";
      } else {
        setError(data.message || "Invalid credentials.");
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
      <div className="hud-border bg-surface-container-low p-8 w-full max-w-md relative">
        <div className="absolute top-4 right-4 font-data-display text-label-sm text-primary/50">SYS.AUTH // LOGIN</div>
        
        <div className="flex flex-col items-center mb-8">
          <span className="material-symbols-outlined text-primary text-5xl mb-2">fingerprint</span>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">Pilot Access</h1>
        </div>

        {error && (
          <div className="bg-error/10 border border-error text-error text-sm p-3 mb-6 rounded font-data-display flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">warning</span>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Email Designation</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
              placeholder="pilot@gundambuilder.io"
            />
          </div>
          
          <div>
            <label className="block font-label-md text-on-surface-variant mb-2">Access Code</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="cyber-clip w-full bg-primary text-on-primary px-4 py-4 mt-2 font-data-display text-data-display uppercase hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin">refresh</span> : <span className="material-symbols-outlined">login</span>}
            {isLoading ? "Authenticating..." : "Establish Link"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
          <p className="text-on-surface-variant text-sm">
            Unregistered pilot? <Link href="/register" className="text-primary hover:underline uppercase font-data-display">Enlist Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
