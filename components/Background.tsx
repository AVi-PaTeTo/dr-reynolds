'use client';

import Image from 'next/image';
import faq from '../public/faq.jpg';
import { useState } from 'react';

export default function Background() {
    const [openTab, setOpenTab] = useState<string | null>(null);

    function handleTabClick(id: string) {
        if (id === openTab) return setOpenTab(null);
        setOpenTab(id);
    }

    return (
        <section className="relative flex h-[693px] items-center bg-[var(--secondary)]">
            <div className="h-fit py-[6.6vmax]">
                <div className="grid-sqs relative h-fit [--grid-cols:8] [--grid-rows:8] md:[--grid-cols:24] md:[--grid-rows:7]">
                    <div className="relative col-start-2 col-end-10 row-start-1 row-end-2 md:col-start-8 md:col-end-20 md:row-start-1 md:row-end-3">
                        <h3 className="fade-up text-center text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] leading-8 font-[500] transition-all duration-500 ease-out md:text-[calc((2.5-1)*1.2vw+1rem)]">
                            My Professional Background
                        </h3>
                    </div>
                    <div className="relative col-start-2 col-end-10 row-start-4 row-end-9 md:col-start-8 md:col-end-20 md:row-start-3 md:row-end-8">
                        <ul className="flex h-full flex-col">
                            <li className="fade-up border-t-1 transition-all duration-500 ease-out md:h-full">
                                <h3 className="text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]">
                                    <button
                                        onClick={() => handleTabClick('1')}
                                        className="group flex h-full w-full py-[15px] text-left hover:cursor-pointer"
                                    >
                                        <span className="fade-up block w-full pr-[14px] leading-8 font-[500] transition-all duration-500 ease-out">
                                            Education
                                        </span>
                                        <span className="relative flex aspect-square w-[15px] shrink-0 items-center justify-center">
                                            <span
                                                className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '1' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                            ></span>
                                            <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '1' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="min-h-0">
                                        <h3 className="mx-auto w-[70%] pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)]">
                                            Euphorbia dianthus alchemilla
                                            muscari lavandula anthurium
                                            artemesia false artemesia moluccella
                                            gladiolus cirsium trollius anthurium
                                            prunus delphinium achillea.
                                        </h3>
                                    </div>
                                </div>
                            </li>
                            <li className="fade-up border-t-1 transition-all duration-500 ease-out md:h-full">
                                <h3 className="text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]">
                                    <button
                                        id="2"
                                        onClick={() => handleTabClick('2')}
                                        className="flex h-full w-full py-[15px] text-left hover:cursor-pointer"
                                    >
                                        <span className="fade-up block w-full pr-[14px] leading-9 font-[500] transition-all duration-500 ease-out">
                                            Licensure
                                        </span>
                                        <span className="relative flex aspect-square w-[15px] shrink-0 items-center justify-center">
                                            <span
                                                className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '2' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                            ></span>
                                            <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '2' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="min-h-0">
                                        <h3 className="mx-auto w-[70%] pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)]">
                                            Euphorbia dianthus alchemilla
                                            muscari lavandula anthurium
                                            artemesia false artemesia moluccella
                                            gladiolus cirsium trollius anthurium
                                            prunus delphinium achillea.
                                        </h3>
                                    </div>
                                </div>
                            </li>
                            <li className="fade-up border-y-1 transition-all duration-500 ease-out md:h-full">
                                <h3 className="text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]">
                                    <button
                                        id="2"
                                        onClick={() => handleTabClick('3')}
                                        className="flex h-full w-full py-[15px] text-left hover:cursor-pointer"
                                    >
                                        <span className="fade-up block w-full pr-[14px] leading-9 font-[500] transition-all duration-500 ease-out">
                                            Certifications
                                        </span>
                                        <span className="relative flex aspect-square w-[15px] shrink-0 items-center justify-center">
                                            <span
                                                className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === '3' ? 'rotate-0' : 'rotate-90'} transition-all duration-200`}
                                            ></span>
                                            <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    className={`grid overflow-hidden transition-all duration-200 ease-linear ${openTab === '3' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="min-h-0">
                                        <h3 className="mx-auto w-[70%] pb-[30px] text-[calc((1.2-1)*1.2vw+1rem)]">
                                            <ul className="list-disc">
                                                <li>
                                                    Cognitive Behavioral Therapy
                                                    (CBT)
                                                </li>
                                                <li>
                                                    Eye Movement Desensitization
                                                    and Reprocessing (EMDR){' '}
                                                </li>
                                                <li>
                                                    Mindfulness-based approaches
                                                </li>
                                                <li>
                                                    Body-oriented / somatic
                                                    techniques
                                                </li>
                                            </ul>
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
