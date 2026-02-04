"use client";

import Image from "next/image";
import faq from "../public/faq.jpg";
import { useState } from "react";

export default function FAQ() {
    const [openTab, setOpenTab] = useState<string | null>(null);

    function handleTabClick(id: string) {
        if (id === openTab) return setOpenTab(null);
        setOpenTab(id);
    }

    return (
        <section className="h-full py-[6.6vmax] bg-[var(--primary)]">
            <div className="relative grid-sqs h-fit [--grid-cols:8] [--grid-rows:18] md:[--grid-cols:24] md:[--grid-rows:17]">
                <div className="relative col-start-2 col-end-10 row-start-1 row-end-7 md:col-start-4 md:col-end-12 md:row-start-1 md:row-end-18">
                    <div className="absolute inset-0 items-center flex">
                        <div className="mx-auto overflow-hidden h-full md:h-auto md:w-full rounded-t-full ">
                            <Image
                                src={faq}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative col-start-2 col-end-10 row-start-8 row-end-10 md:col-start-14 md:col-end-26 md:row-start-4 md:row-end-6">
                    <h3 className="text-[calc((3-1)*1.2vw+1rem)] font-[500]">
                        FAQs{" "}
                    </h3>
                </div>
                <div className="relative col-start-2 col-end-10 row-start-10 row-end-19 md:col-start-14 md:col-end-26 md:row-start-7 md:row-end-14">
                    <ul className="flex flex-col h-full">
                        <li className="border-t-1 md:h-full">
                            <h3 className="md:text-[calc((2.5-1)*1.2vw+1rem)] text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)]">
                                <button
                                    onClick={() => handleTabClick("1")}
                                    className="group py-[15px] h-full w-full text-left flex"
                                >
                                    <span className="relative flex shrink-0 w-[30px] items-center justify-center aspect-square">
                                        <span
                                            className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === "1" ? "rotate-0" : "rotate-90"}  transition-all duration-200`}
                                        ></span>
                                        <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                    </span>

                                    <span className="block font-[500] leading-8 pl-[30px]">
                                        Do you take insurance?
                                    </span>
                                </button>
                            </h3>
                            <div
                                className={`grid transition-all duration-200 ease-linear overflow-hidden 
                                            ${openTab === "1" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="text-[calc((1.2-1)*1.2vw+1rem)] font-[500] pb-[30px]">
                                        Answer goes here.
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li className="border-t-1 md:h-full">
                            <h3 className="md:text-[calc((2.5-1)*1.2vw+1rem)] text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)]">
                                <button
                                    id="2"
                                    onClick={() => handleTabClick("2")}
                                    className="py-[15px] h-full w-full text-left flex"
                                >
                                    <span className="relative flex shrink-0 w-[30px] items-center justify-center aspect-square">
                                        <span
                                            className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === "2" ? "rotate-0" : "rotate-90"}  transition-all duration-200`}
                                        ></span>
                                        <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                    </span>
                                    <span className="block font-[500] leading-9 pl-[30px]">
                                        What are your rates?
                                    </span>
                                </button>
                            </h3>
                            <div
                                className={`grid transition-all duration-200 ease-linear overflow-hidden 
                                            ${openTab === "2" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="text-[calc((1.2-1)*1.2vw+1rem)] font-[500] pb-[30px]">
                                        Answer goes here.
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li className="border-y-1 md:h-full">
                            <h3 className="md:text-[calc((2.5-1)*1.2vw+1rem)] text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)]">
                                <button
                                    id="3"
                                    onClick={() => handleTabClick("3")}
                                    className="h-full w-full text-left flex"
                                >
                                    <div className="flex text-left py-[15px] ">
                                        <span className="relative flex shrink-0 w-[30px] items-center justify-center aspect-square">
                                            <span
                                                className={`absolute block h-[1px] w-full bg-[var(--accent)] ${openTab === "3" ? "rotate-0" : "rotate-90"}  transition-all duration-200`}
                                            ></span>
                                            <span className="absolute block h-[1px] w-full bg-[var(--accent)]"></span>
                                        </span>
                                        <span className="block font-[500] leading-8 pl-[30px]">
                                            Do you have any openings?
                                        </span>
                                    </div>
                                </button>
                            </h3>
                            <div
                                className={`grid transition-all duration-200 ease-linear overflow-hidden 
                                            ${openTab === "3" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="min-h-0">
                                    <h3 className="text-[calc((1.2-1)*1.2vw+1rem)] font-[500] pb-[30px]">
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
