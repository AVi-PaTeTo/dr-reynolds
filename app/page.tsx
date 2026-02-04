import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Recognition from "@/components/Recognition";
import Resonance from "@/components/Resonance";
import Speciality from "@/components/Speciality";
export default function Home() {
    return (
        <div className="flex flex-col text-[var(--accent)] transition-all duration-400 ease">
            <Hero />
            <Resonance />
            <Speciality />
            <Recognition />
            <Introduction />
        </div>
    );
}
