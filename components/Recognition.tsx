import Image from 'next/image';
import recognition from '@/src/assets/images/recognition.webp';
export default function Recognition() {
    return (
        <section className="h-full">
            <div className="grid-sqs grid-flush relative h-full bg-[#cfd8dc] text-[var(--accent)] [--grid-cols:8] [--grid-rows:24] md:[--grid-cols:24] md:[--grid-rows:21]">
                <div
                    data-animate="fade-up"
                    className="col-start-1 col-end-11 row-start-1 row-end-9 md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-22"
                >
                    <div className="h-full overflow-hidden">
                        <Image
                            src={recognition}
                            alt="Silhouette of a person facing the ocean waves under a bright sky."
                            className="h-[269px] object-cover md:h-full"
                        />
                    </div>
                </div>
                <div className="col-start-2 col-end-10 row-start-10 row-end-15 text-[calc((1-1)*(0.012*min(100vh,900px))+1rem)] md:col-start-14 md:col-end-26 md:row-start-4 md:row-end-9 md:text-[calc((1-1)*1.2vw+1rem)]">
                    <div>
                        <h2
                            data-animate="fade-up"
                            className="mb-8 leading-[calc(1.2em*(1+(1-3)/25))]"
                        >
                            When things look “
                            <span className="italic">fine</span>”, but don’t
                            feel that way.
                        </h2>
                        <p data-animate="fade" className="mt-4">
                            My work often focuses on anxiety, panic, trauma, and
                            burnout in adults who appear functional on the
                            outside but feel overwhelmed internally.
                        </p>
                        <p data-animate="fade" className="mt-3">
                            If you recognize any of these patterns, there is a
                            way forward:
                        </p>
                    </div>
                </div>
                <div className="col-start-2 col-end-10 row-start-15 row-end-20 text-[calc((1-1)*(0.012*min(100vh,900px))+1rem)] md:col-start-14 md:col-end-26 md:row-start-9 md:row-end-15 md:text-[calc((1-1)*1.2vw+1rem)]">
                    <div>
                        <ul className="list-disc pl-10">
                            <li data-animate="fade" className="my-[0.5em]">
                                <p className="">
                                    Functioning well on the outside while
                                    constantly bracing internally in a demanding
                                    career.
                                </p>
                            </li>
                            <li data-animate="fade" className="my-[0.5em]">
                                <p className="">
                                    Difficulty sleeping, overthinking, or
                                    feeling perpetually on edge.
                                </p>
                            </li>
                            <li data-animate="fade" className="my-[0.5em]">
                                <p className="">
                                    Feeling disconnected from yourself after
                                    years of pushing through pressure.
                                </p>
                            </li>
                            <li data-animate="fade" className="my-[0.5em]">
                                <p className="">
                                    Noticing earlier experiences still shaping
                                    confidence, relationships, or a sense of
                                    safety.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-start-2 col-end-10 row-start-20 row-end-22 text-[calc((1-1)*(0.012*min(100vh,900px))+1rem)] md:col-start-14 md:col-end-26 md:row-start-15 md:row-end-18 md:text-[calc((1-1)*1.2vw+1rem)]">
                    <div className="flex flex-col gap-3">
                        <p data-animate="fade">
                            Many clients also notice the impact of earlier life
                            experiences shaping their relationships, confidence,
                            or sense of safety today.
                        </p>
                        <p data-animate="fade">
                            My work is grounded, evidence-based, and
                            collaborative.
                        </p>
                        <p data-animate="fade">
                            Together, we focus on restoring clarity, steadiness,
                            and a more sustainable way of living.
                        </p>
                    </div>
                </div>
                <div
                    data-animate="fade-up"
                    className="col-start-1 col-end-11 row-start-23 row-end-25 md:col-start-13 md:col-end-27 md:row-start-20 md:row-end-22"
                >
                    <button className="mx-auto flex h-full w-full items-center justify-center gap-2 border-t-1 border-[var(--accent)] px-[2em] text-[calc((0.9-1)*1.2vw+1rem)] font-[500] tracking-wider transition-colors duration-400 ease-linear hover:cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--primary)] md:border-t-2">
                        WORK WITH ME
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
            </div>
        </section>
    );
}
