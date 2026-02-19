import BookAppointment from '@/components/contact/BookAppointment';
import Hero from '@/components/contact/Hero';
import OfficeDetails from '@/components/contact/OfficeDetails';

export default function Contact() {
    return (
        <div className="flex flex-col text-[var(--accent)] transition-all duration-400 ease-linear">
            <Hero />
            <BookAppointment />
            <OfficeDetails />
        </div>
    );
}
