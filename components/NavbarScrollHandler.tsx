'use client';

import { useEffect } from 'react';

export default function NavbarScrollHandler() {
    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        let isHidden = false;

        const onScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show near the top
            if (currentScrollY < 80) {
                navbar.classList.remove('nav-hidden');
                isHidden = false;
                lastScrollY = currentScrollY;
                return;
            }

            // Scrolling down → hide
            if (currentScrollY > lastScrollY && !isHidden) {
                navbar.classList.add('nav-hidden');
                isHidden = true;
            }

            // Scrolling up → show
            if (currentScrollY < lastScrollY && isHidden) {
                navbar.classList.remove('nav-hidden');
                isHidden = false;
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return null;
}
