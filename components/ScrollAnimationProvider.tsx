'use client';

import { useEffect } from 'react';

export default function ScrollAnimationProvider() {
    useEffect(() => {
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
    }, []);

    return null;
}
