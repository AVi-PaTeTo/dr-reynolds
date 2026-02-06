'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <header
                id="navbar"
                className="fixed top-0 z-50 flex w-full items-center justify-between bg-[var(--primary)] p-[6vw] text-[var(--accent)] lg:px-[3.75vw] lg:py-[1vw]"
            >
                <span
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="block flex aspect-square w-[35px] flex-col justify-center gap-[5px] text-[18px] lg:hidden"
                >
                    <div
                        className={`h-[1px] w-[35px] bg-[var(--accent)] transition-all ${menuOpen ? 'translate-y-[5.5px] -rotate-135' : ''}`}
                    ></div>
                    <div></div>
                    <div
                        className={`h-[1px] w-[35px] bg-[var(--accent)] transition-all ${menuOpen ? '-translate-y-[5.5px] rotate-135' : ''}`}
                    ></div>
                </span>

                <span
                    onClick={scrollToTop}
                    className="text-[calc((1.2-1)*calc(.012*min(100vh,900px))+1rem)] font-[510] hover:cursor-pointer md:text-[calc((2-1)_*_1.2vw_+_1rem)]"
                >
                    Dr. Maya Reynolds
                </span>
                <span className="hidden text-[18px] lg:block">
                    <span>Blog</span>
                    <span className="ml-10">Contact</span>
                </span>
            </header>

            <div
                className={`fixed inset-0 z-40 transform-gpu bg-[var(--primary)] transition-all transition-discrete duration-600 ease-in-out starting:opacity-0 ${
                    menuOpen ? 'block opacity-100' : 'hidden opacity-0'
                } `}
            >
                <span className="flex h-full w-full flex-col justify-center delay-200">
                    <div className="w-full px-4 text-center text-[1.2em]">
                        <h1>Blogs</h1>
                    </div>
                    <br />
                    <div className="w-full px-4 text-center text-[1.2em]">
                        <h1>Contact</h1>
                    </div>
                </span>
            </div>
        </>
    );
}
