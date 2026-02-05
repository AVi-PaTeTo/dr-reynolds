import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';
import NavbarScrollHandler from '@/components/NavbarScrollHandler';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const myFont = localFont({
    variable: '--font-gopher',
    src: [
        { path: './fonts/Gopher-Thin.ttf', weight: '300' },
        { path: './fonts/Gopher-Regular.ttf', weight: '400' },
        { path: './fonts/Gopher-Medium.ttf', weight: '500' },
        { path: './fonts/Gopher-Bold.ttf', weight: '600' },
    ],
});

export const metadata: Metadata = {
    title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica',
    description:
        'Dr. Maya Reynolds, PsyD offers therapy for anxiety, trauma, panic, and burnout for adults in Santa Monica and across California via secure telehealth. A warm, grounded, evidence-based approach.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${myFont.variable} antialiased`}>
                <NavbarScrollHandler />
                <ScrollAnimationProvider />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
