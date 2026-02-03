import Hero from "@/components/Hero";
import Resonance from "@/components/Resonance";
export default function Home() {
    return (
        <div className="flex flex-col text-[var(--accent)]">
            <Hero />
            <Resonance />
        </div>
    );
}
