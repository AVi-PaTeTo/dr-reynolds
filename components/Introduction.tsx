import Image from 'next/image';
import profile from '@/src/assets/images/profile.png';
import badge from '@/src/assets/images/badge2.jpg';
export default function Introduction() {
    return (
        <section className="h-full max-h-screen w-full bg-slate-100 py-[6.6vmax]">
            <div className="grid-sqs relative max-h-screen [--grid-cols:8] [--grid-rows:20] md:[--grid-cols:24] md:[--grid-rows:18]">
                <div className="col-start-2 col-end-10 row-start-10 row-end-17 md:col-start-3 md:col-end-14 md:row-start-5 md:row-end-13">
                    <h2
                        data-animate="fade-up"
                        className="mb-8 leading-[calc(1.2em*(1+(1-3)/25))]"
                    >
                        Hi, I’m Dr. Maya Reynolds.
                    </h2>
                    <p data-animate className="mt-4">
                        Many of the people I work with are capable, thoughtful
                        adults who feel overwhelmed despite “
                        <span className="italic">doing everything right.</span>”
                        Therapy offers a place to pause, understand what’s
                        driving that tension, and create meaningful change at a
                        pace that feels manageable.
                    </p>
                </div>
                <div
                    data-animate="fade-up"
                    className="col-start-2 col-end-10 row-start-18 row-end-21 flex items-center justify-center md:col-start-3 md:col-end-14 md:row-start-14 md:row-end-16"
                >
                    <button className="mx-auto flex h-fit w-fit gap-2 border-1 border-[-var(--acce)] border-[var(--accent)] px-[2em] py-[1em] text-[calc((0.9-1)*1.2vw+1rem)] font-[500] tracking-wider transition-colors duration-400 ease-linear hover:cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--primary)]">
                        LET&apos;S CHAT
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="relative col-start-2 col-end-10 row-start-1 row-end-9 md:col-start-14 md:col-end-25 md:row-start-1 md:row-end-17">
                    <div
                        data-animate="fade-up"
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="aspect-[2/3] h-full max-w-full overflow-hidden rounded-t-full">
                            <Image
                                src={profile}
                                alt="Hero Image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative z-3 col-start-6 col-end-9 row-start-5 row-end-9 md:col-start-20 md:col-end-26 md:row-start-11 md:row-end-19">
                    <div
                        data-animate="fade-up"
                        className="absolute inset-0 flex items-center"
                    >
                        <div className="aspect-square h-full overflow-hidden rounded-full md:h-auto md:w-full">
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
