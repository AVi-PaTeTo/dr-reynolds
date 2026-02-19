import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Recognition from '@/components/Recognition';
import Resonance from '@/components/Resonance';
import Speciality from '@/components/Speciality';
import FAQ from '@/components/FAQ';
import Background from '@/components/Background';
import ReachOut from '@/components/ReachOut';
import { Details } from '@/components/OfficeDetails';
import MyOffice from '@/components/MyOffice';

export default function Home() {
    return (
        <div className="flex flex-col text-[var(--accent)] transition-all duration-400 ease-linear">
            <Hero />
            <Resonance />
            <Speciality />
            <Recognition />
            <Introduction />
            <MyOffice />
            <FAQ />
            <Background />
            <ReachOut />
        </div>
    );
}
