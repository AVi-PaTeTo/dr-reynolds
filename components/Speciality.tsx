import card1 from "../public/card1.webp";
import card2 from "../public/card2.webp";
import card3 from "../public/card3.webp";
import Image from "next/image";

export default function Speciality() {
    return (
        <section className="py-[6.6vmax]">
            <div className="w-full pb-[50px] px-[3.75vw]">
                <p className="text-center text-[calc((3-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((3-1)*1.2vw+1rem)] font-[500]">
                    My Specialties
                </p>
            </div>
            <ul className="wrap-break-word grid  tablet:grid-cols-2 tablet:grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-5 px-[3.75vw]">
                <li className="p-5 outline-1 outline-[var(--accent)] flex flex-col justify-between bg-[var(--secondary)]">
                    <div>
                        <h2 className="leading-tight">Anxiety</h2>
                        <div className="text-[calc((0.9-1)*1.2vw+1rem)] mt-[10%] tracking-wider">
                            <p className="mb-2">
                                You appear functional on the outside, but
                                operate under constant internal pressure.
                            </p>
                            <p className="mt-2">
                                The work is moving from bracing for what’s next
                                to building a sustainable way of living and
                                working
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10%] mx-auto  w-[75%] rounded-full overflow-hidden ">
                        <Image
                            src={card1}
                            alt=""
                            className="object-cover object-bottom-left aspect-square"
                        />
                    </div>
                </li>
                <li className="p-5 outline-1 outline-[var(--accent)] flex flex-col justify-between bg-[var(--secondary)]">
                    <div>
                        <h2 className="leading-tight">Trauma</h2>
                        <div className="text-[calc((0.9-1)*1.2vw+1rem)] mt-[10%] tracking-wider">
                            <p className="mb-2">
                                Past experiences still shape how your body
                                responds to stress, relationships, and
                                uncertainty.
                            </p>
                            <p className="mt-2">
                                We focus on paced, evidence-based work that
                                restores a sense of safety and regulation in
                                daily life.
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10%] mx-auto w-[75%] rounded-full overflow-hidden ">
                        <Image
                            src={card2}
                            alt=""
                            className="object-cover aspect-square"
                        />
                    </div>
                </li>
                <li className="p-5 outline-1 outline-[var(--accent)] flex flex-col justify-between bg-[var(--secondary)]">
                    <div>
                        <h2 className="leading-tight">Pressure</h2>
                        <div className="text-[calc((0.9-1)*1.2vw+1rem)] mt-[10%] tracking-wider">
                            <p className="mb-2">
                                You’ve spent years pushing forward in demanding
                                environments — often at the expense of yourself.
                            </p>
                            <p className="mt-2">
                                The work here is easing perfectionism,
                                developing insight, and building a steadier
                                relationship with yourself.
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10%] mx-auto  w-[75%] rounded-full overflow-hidden ">
                        <Image
                            src={card3}
                            alt=""
                            className="scale-150 object-center object-cover aspect-square"
                        />
                    </div>
                </li>
            </ul>
        </section>
    );
}
