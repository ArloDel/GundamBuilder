import HeroSection from "@/components/home/HeroSection";
import MissionBriefing from "@/components/home/MissionBriefing";
import Leaderboard from "@/components/home/Leaderboard";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="pt-20 px-margin-mobile md:px-margin-desktop pb-24 md:pb-32">
        <HeroSection />
        <MissionBriefing />
        <Leaderboard />
      </main>
    </>
  );
}
