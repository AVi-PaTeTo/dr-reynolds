import Image from "next/image";
import profile from "../public/profile.png";
import badge from "../public/badge2.jpg";
export default function Introduction() {
    return (
        <section className="w-full h-full py-[6.6vmax] max-h-screen bg-slate-100">
            <div className="relative max-h-screen grid-sqs [--grid-cols:8] [--grid-rows:20] md:[--grid-cols:24] md:[--grid-rows:18]">
                <div className="col-start-2 col-end-10 row-start-10 row-end-17 md:col-start-3 md:col-end-14 md:row-start-5 md:row-end-13">
                    <h2 className="mb-8 leading-[calc(1.2em*(1+(1-3)/25))]">
                        Hi, I’m Dr. Maya Reynolds.
                    </h2>
                    <p className="mt-4">
                        Many of the people I work with are capable, thoughtful
                        adults who feel overwhelmed despite “
                        <span className="italic">doing everything right.</span>”
                        Therapy offers a place to pause, understand what’s
                        driving that tension, and create meaningful change at a
                        pace that feels manageable.
                    </p>
                </div>
                <div className="flex justify-center items-center col-start-2 col-end-10 row-start-18 row-end-21  md:col-start-3 md:col-end-14 md:row-start-14 md:row-end-16">
                    <button className="mx-auto px-[2em] py-[1em] border-1 border-[-var(--acce)] w-fit h-fit tracking-wider font-[500] text-[calc((0.9-1)*1.2vw+1rem)] hover:text-[var(--primary)] hover:bg-[var(--accent)] border-[var(--accent)] transition-colors duration-400 ease-linear">
                        LET&apos;S CHAT &#8594;
                    </button>
                </div>
                <div className="col-start-2 col-end-10 row-start-1 row-end-9 md:col-start-14 md:col-end-25 md:row-start-1 md:row-end-17 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="aspect-[2/3] h-full max-w-full overflow-hidden rounded-t-full">
                            <Image
                                src={profile}
                                alt="Hero Image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative col-start-6 col-end-9 row-start-5 row-end-9  md:col-start-20 md:col-end-26 md:row-start-11 md:row-end-19 z-3">
                    <div className="absolute inset-0 flex items-center">
                        <div className="rounded-full aspect-square h-full md:h-auto md:w-full overflow-hidden">
                            <Image
                                src={badge}
                                alt="Hero Image"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
