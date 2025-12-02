import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Waitlist } from "@/components/landing/Waitlist";
import { BackgroundGrid } from "@/components/landing/BackgroundGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 relative">
      <BackgroundGrid />
      <Hero />
      <FeatureGrid />
      <Waitlist />
      
      <footer className="py-8 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} CodeSync. All rights reserved.</p>
      </footer>
    </main>
  );
}
