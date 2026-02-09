'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function ScrollAnimationProvider() {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        const timeout = setTimeout(() => {
            const elements =
                document.querySelectorAll<HTMLElement>('[data-animate]');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );

            elements.forEach((el) => observer.observe(el));
        }, 0);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
