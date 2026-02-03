import Hero from "@/components/Hero";
import Resonance from "@/components/Resonance";
import Speciality from "@/components/Speciality";
export default function Home() {
    return (
        <div className="flex flex-col text-[var(--accent)]">
            <Hero />
            <Resonance />
            <Speciality />
        </div>
    );
}
