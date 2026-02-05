'use client';

import Image from 'next/image';
import faq from '@/src/assets/images/faq.webp';
import { useState } from 'react';

export default function FAQ() {
    const [openTab, setOpenTab] = useState<string | null>(null);

    function handleTabClick(id: string) {
        if (id === openTab) return setOpenTab(null);
        setOpenTab(id);
    }

    return (
        <section className="h-full bg-[var(--primary)] py-[6.6vmax]">
            <div className="grid-sqs relative h-fit [--grid-cols:8] [--grid-rows:18] md:[--grid-cols:24] md:[--grid-rows:17]">
                <div
                    data-animate="fade-up"
                    className="relative col-start-2 col-end-10 row-start-1 row-end-7 md:col-start-4 md:col-end-12 md:row-start-1 md:row-end-18"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto h-full overflow-hidden rounded-t-full md:h-auto md:w-full">
                            <Image
                                src={faq}
                                alt="Interior shot of a tall wooden bookshelf filled with books next to a classic floor lamp."
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative col-start-2 col-end-10 row-start-8 row-end-10 md:col-start-14 md:col-end-26 md:row-start-4 md:row-end-6">
                    <h3
                        data-animate="fade-up"
                        className="text-[calc((3-1)*(.012*min(100vh,900px))+1rem)] font-[500] md:text-[calc((3-1)*1.2vw+1rem)]"
                    >
                        FAQs
                    </h3>
                </div>
                <div className="relative col-start-2 col-end-10 row-start-10 row-end-19 md:col-start-14 md:col-end-26 md:row-start-7 md:row-end-14">
                    <ul className="flex h-full flex-col">
                        <li
                            data-animate="fade-up"
                            className="border-t-1 md:h-fit"
                        >
                            <h3 className="text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]">
                                <button
                                    onClick={() => handleTabClick('1')}
                                    className="group flex h-full w-full py-[15px] text-left hover:cursor-pointer"
                                >
                                    <span className="relative flex aspect-square w-[30px] shrink-0 items-center justify-center">
                                        <span
                                            className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '1' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                        ></span>
                                        <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                    </span>

                                    <span
                                        data-animate="fade-up"
                                        className="block pl-[30px] leading-10 font-[500]"
                                    >
                                        Do you take insurance?
                                    </span>
                                </button>
                            </h3>
                            <div
                                className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '1' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)] font-[500]">
                                        Answer goes here.
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li
                            data-animate="fade-up"
                            className="border-t-1 md:h-fit"
                        >
                            <h3 className="text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]">
                                <button
                                    id="2"
                                    onClick={() => handleTabClick('2')}
                                    className="flex h-full w-full py-[15px] text-left hover:cursor-pointer"
                                >
                                    <span className="relative flex aspect-square w-[30px] shrink-0 items-center justify-center">
                                        <span
                                            className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '2' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                        ></span>
                                        <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                    </span>
                                    <span
                                        data-animate="fade-up"
                                        className="block pl-[30px] leading-10 font-[500]"
                                    >
                                        What are your rates?
                                    </span>
                                </button>
                            </h3>
                            <div
                                className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '2' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)] font-[500]">
                                        Answer goes here.
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li
                            data-animate="fade-up"
                            className="border-y-1 md:h-fit"
                        >
                            <h3 className="text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]">
                                <button
                                    id="3"
                                    onClick={() => handleTabClick('3')}
                                    className="flex h-full w-full text-left hover:cursor-pointer"
                                >
                                    <div className="flex py-[15px] text-left">
                                        <span className="relative flex aspect-square w-[30px] shrink-0 items-center justify-center">
                                            <span
                                                className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '3' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                            ></span>
                                            <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                        </span>
                                        <span
                                            data-animate="fade-up"
                                            className="block pl-[30px] leading-10 font-[500]"
                                        >
                                            Do you have any openings?
                                        </span>
                                    </div>
                                </button>
                            </h3>
                            <div
                                className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '3' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)] font-[500]">
                                        Answer goes here.
                                    </h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
