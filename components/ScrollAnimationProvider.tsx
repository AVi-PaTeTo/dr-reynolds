'use client';

import { useEffect } from 'react';

export default function ScrollAnimationProvider() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
