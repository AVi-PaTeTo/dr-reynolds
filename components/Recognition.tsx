import Image from "next/image";
import recognition from "../public/recognition.webp";
export default function Recognition() {
    return (
        <section className="relative section-grid-recognition bg-[#cfd8dc] text-[var(--accent)]">
            <div className="col-start-1 col-end-11 row-start-1 row-end-9 md:col-start-1 md:col-end-14 md:row-start-1 md:row-end-22">
                <div className="overflow-hidden h-full">
                    <Image
                        src={recognition}
                        alt=""
                        className="h-[269px] md:h-full object-cover "
                    />
                </div>
            </div>
            <div className="col-start-2 col-end-10 row-start-10 row-end-15 md:col-start-15 md:col-end-26 md:row-start-5 md:row-end-10">
                <div>
                    <h2 className="mb-8 text-[calc(((3-1)*0.012*min(100vh,900px))+1rem)] md:text-[calc((3-1)*1.2vw+1rem)] font-[510] leading-[calc(1.2em*(1+(1-3)/25))]">
                        When things look “<span className="italic">fine</span>”,
                        but don’t feel that way.
                    </h2>
                    <p className="mt-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        If you recognize any of these patterns, there is a way
                        forward:
                    </p>
                </div>
            </div>
            <div className="col-start-2 col-end-10 row-start-15 row-end-20 md:col-start-15 md:col-end-26 md:row-start-10 md:row-end-16">
                <div>
                    <ul className="list-disc pl-10">
                        <li className="my-[0.5em]">
                            <p className="text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                                Functioning well on the outside while constantly
                                bracing internally in a demanding career.
                            </p>
                        </li>
                        <li className="my-[0.5em]">
                            <p className="text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                                Difficulty sleeping, overthinking, or feeling
                                perpetually on edge.
                            </p>
                        </li>
                        <li className="my-[0.5em]">
                            <p className="text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                                Feeling disconnected from yourself after years
                                of pushing through pressure.
                            </p>
                        </li>
                        <li className="my-[0.5em]">
                            <p className="text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                                Noticing earlier experiences still shaping
                                confidence, relationships, or a sense of safety.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-start-2 col-end-10 row-start-20 row-end-22 md:col-start-15 md:col-end-26 md:row-start-16 md:row-end-18">
                <div className="text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                    <p>
                        My work is grounded, evidence-based, and collaborative.
                    </p>
                    <p>
                        Together, we focus on restoring clarity, steadiness, and
                        a more sustainable way of living.
                    </p>
                </div>
            </div>
            <div className="col-start-1 col-end-11 row-start-23 row-end-25 md:col-start-14 md:col-end-27 md:row-start-20 md:row-end-22">
                <button className="mx-auto px-[2em] border-t-1 md:border-t-2 w-full h-full font-[600] tracking-wider text-[calc((0.9-1)*1.2vw+1rem)] hover:text-[var(--primary)] hover:bg-[var(--accent)] border-[var(--accent)] transition-colors duration-400 ease-linear">
                    WORK WITH ME →
                </button>
            </div>
        </section>
    );
}
