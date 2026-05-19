import Image from "next/image";
import Link from "next/link";

export default function TopAppBar() {
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
        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-primary-container/10">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-primary-container/10">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-primary overflow-hidden ml-2 flex items-center justify-center">
          <img alt="Pilot Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfHJx9dejHOruHqNvrJfU73Xhr_N7KKSp5RAac04ZqxkLelulHB2IREHHg6djkRhf9QW6uRkT0AYqN1IRqlSII72HxOUNBU5DfoY6Pg0NNfZdkiEBL_lXmQArFBmji1fzsoR2j-8N2YgYZ_vmyntqF21gXImPfXkL8TpLcxnGu9GnBY5fstua5HMK3wWQ728vgNIUt8GeWBlH89roqwNQ3U0uBrcIoRh6semh0s12AKG0Br0h_DDbI1CZ1Ro5WLkDlSljsEIG0XZa" />
        </div>
      </div>
    </header>
  );
}
