import Image from "next/image";
import profile from "../public/profile.png";
import badge from "../public/badge2.jpg";
export default function Introduction() {
    return (
        <section className="h-full py-[6.6vmax] max-h-screen bg-[var(--primary)]">
            <div className="relative max-h-screen grid-sqs h-fit [--grid-cols:8] [--grid-rows:18] md:[--grid-cols:24] md:[--grid-rows:17]"></div>
        </section>
    );
}
