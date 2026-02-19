'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimationHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const elements = document.querySelectorAll('[data-animate]');

        // Reset state first
        elements.forEach((el) => {
            el.classList.remove('animate-in');
        });

        // Force reflow so the browser picks up the reset
        void document.body.offsetHeight;

        // Animate back in
        elements.forEach((el) => {
            el.classList.add('animate-in');
        });
    }, [pathname]);

    return null;
}
