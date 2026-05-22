"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TopAppBar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      try {
        await fetch("http://127.0.0.1:8000/api/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
      } catch (e) {
        console.error("Logout failed", e);
      }
    }
    
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 bg-background/80 backdrop-blur-md border-b border-outline-variant shadow-[0_0_15px_rgba(168,200,255,0.2)]">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">build_circle</span>
        <Link href="/" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter uppercase">
          GundamBuilder.io
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link className="text-on-surface-variant font-medium hover:text-primary transition-all duration-150 py-2 border-b-2 border-transparent" href="/hangar">Hangar</Link>
        <Link className="text-on-surface-variant font-medium hover:text-primary transition-all duration-150 py-2 border-b-2 border-transparent" href="/missions">Missions</Link>
        <Link className="text-on-surface-variant font-medium hover:text-primary transition-all duration-150 py-2 border-b-2 border-transparent" href="/armory">Armory</Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-surface-container-high border border-outline-variant rounded px-3 py-1.5 focus-within:border-primary transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
          <input className="bg-transparent border-none text-on-surface text-sm focus:ring-0 w-32 placeholder:text-on-surface-variant/50 font-data-display outline-none" placeholder="Search Data..." type="text" />
        </div>
        
        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-data-display text-primary uppercase">{user.username}</span>
              <span className="text-xs text-on-surface-variant font-data-display">{user.current_xp} XP</span>
            </div>
            <button onClick={handleLogout} className="text-error hover:text-error/80 transition-colors p-2 rounded-full hover:bg-error/10 ml-2" title="Log Out">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 ml-2">
            <Link href="/login" className="text-sm font-data-display text-on-surface hover:text-primary uppercase transition-colors">Login</Link>
            <span className="text-outline-variant">/</span>
            <Link href="/register" className="text-sm font-data-display text-primary hover:text-primary-fixed uppercase transition-colors">Enlist</Link>
          </div>
        )}
      </div>
    </header>
  );
}
