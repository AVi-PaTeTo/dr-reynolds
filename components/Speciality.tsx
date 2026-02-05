import card1 from '../public/card1.webp';
import card2 from '../public/card2.webp';
import card3 from '../public/card3.webp';
import Image from 'next/image';

export default function Speciality() {
    return (
        <section className="py-[6.6vmax]">
            <div className="w-full px-[3.75vw] pb-[50px]">
                <h3 className="text-center text-[calc((3-1)*(0.012*min(100vh,900px))+1rem)] font-[500] md:text-[calc((3-1)*1.2vw+1rem)]">
                    My Specialties
                </h3>
            </div>
            <ul className="tablet:grid-cols-2 tablet:grid-rows-2 grid gap-5 px-[3.75vw] wrap-break-word md:grid-cols-3 md:grid-rows-none">
                <li className="flex flex-col justify-between bg-[var(--secondary)] p-5 outline-1 outline-[var(--accent)]">
                    <div>
                        <h2 className="fade-up leading-tight">
                            Anxiety & Panic
                        </h2>
                        <div className="mt-[10%] text-[calc((0.9-1)*1.2vw+1rem)] tracking-wider">
                            <p className="mb-2">
                                Persistent worry, physical tension, difficulty
                                sleeping, or feeling constantly on edge. Many
                                clients appear capable on the outside while
                                managing ongoing anxiety or panic internally.
                            </p>
                            {/* <p className="mt-2">
                                The work is moving from bracing for what’s next
                                to building a sustainable way of living and
                                working
                            </p> */}
                        </div>
                    </div>
                    <div className="fade-up mx-auto mt-[10%] w-[75%] overflow-hidden rounded-full">
                        <Image
                            src={card1}
                            alt=""
                            className="aspect-square object-cover object-bottom-left"
                        />
                    </div>
                </li>
                <li className="flex flex-col justify-between bg-[var(--secondary)] p-5 outline-1 outline-[var(--accent)]">
                    <div>
                        <h2 className="fade-up leading-tight">Trauma</h2>
                        <div className="mt-[10%] text-[calc((0.9-1)*1.2vw+1rem)] tracking-wider">
                            <p className="mb-2">
                                Support for adults affected by single-incident
                                trauma as well as more complex, long-standing
                                patterns rooted in childhood, relationships, or
                                chronic stress.
                            </p>
                            {/* <p className="mt-2">
                                We focus on paced, evidence-based work that
                                restores a sense of safety and regulation in
                                daily life.
                            </p> */}
                        </div>
                    </div>
                    <div className="fade-up mx-auto mt-[10%] w-[75%] overflow-hidden rounded-full">
                        <Image
                            src={card2}
                            alt=""
                            className="aspect-square object-cover"
                        />
                    </div>
                </li>
                <li className="flex flex-col justify-between bg-[var(--secondary)] p-5 outline-1 outline-[var(--accent)]">
                    <div>
                        <h2 className="fade-up leading-tight">
                            Burnout & Internal Pressure
                        </h2>
                        <div className="mt-[10%] text-[calc((0.9-1)*1.2vw+1rem)] tracking-wider">
                            <p className="mb-2">
                                Therapy for professionals, creatives, and
                                high-achieving adults experiencing burnout,
                                perfectionism, or sustained internal pressure
                                after years of pushing through stress.
                            </p>
                            {/* <p className="mt-2">
                                The work here is easing perfectionism,
                                developing insight, and building a steadier
                                relationship with yourself.
                            </p> */}
                        </div>
                    </div>
                    <div className="fade-up mx-auto mt-[10%] w-[75%] overflow-hidden rounded-full">
                        <Image
                            src={card3}
                            alt=""
                            className="aspect-square scale-150 object-cover object-center"
                        />
                    </div>
                </li>
            </ul>
        </section>
    );
}
