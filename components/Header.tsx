'use client';

import Link from 'next/link';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();
    const currentPage = pathName.split('/')[1];

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

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };
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

                <Link href={'/'}>
                    <span
                        // onClick={scrollToTop}
                        className="text-[calc((1.2-1)*calc(.012*min(100vh,900px))+1rem)] font-[510] hover:cursor-pointer md:text-[calc((2-1)_*_1.2vw_+_1rem)]"
                    >
                        Dr. Maya Reynolds, PsyD
                    </span>
                </Link>
                <span className="hidden gap-10 text-[18px] lg:flex">
                    <Link href="/blog">
                        <button
                            className={`hover:cursor-pointer ${currentPage === 'blog' ? 'border-b-1' : ''}`}
                        >
                            Blogs
                        </button>
                    </Link>
                    <Link href={'/contact'}>
                        <button
                            className={`hover:cursor-pointer ${currentPage === 'contact' ? 'border-b-1' : ''}`}
                        >
                            Contact
                        </button>
                    </Link>
                </span>
            </header>

            <div
                className={`fixed inset-0 z-40 transform-gpu bg-[var(--primary)] transition-all transition-discrete duration-600 ease-in-out starting:opacity-0 ${
                    menuOpen ? 'block opacity-100' : 'hidden opacity-0'
                } `}
            >
                <span className="flex h-full w-full flex-col justify-center text-[var(--accent)] delay-200">
                    <div className="w-full px-4 text-center text-[1.2em]">
                        <Link
                            onClick={() => setMenuOpen(false)}
                            className="hover:cursor-pointer"
                            href="/blog"
                        >
                            <h1
                                className={`pointer-events-none ${currentPage === 'blog' ? 'underline underline-offset-1' : ''}`}
                            >
                                Blogs
                            </h1>
                        </Link>
                    </div>
                    <br />
                    <div className="w-full px-4 text-center text-[1.2em]">
                        <Link
                            onClick={() => setMenuOpen(false)}
                            className="hover:cursor-pointer"
                            href="/contact"
                        >
                            <h1
                                className={`pointer-events-none ${currentPage === 'contact' ? 'underline underline-offset-1' : ''}`}
                            >
                                Contact
                            </h1>
                        </Link>
                    </div>
                </span>
            </div>
        </>
    );
}
