import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type postCard = {
    image: { image: StaticImageData; alt: string };
    title: string;
    date: string;
};

export default function Card({ image, title, date }: postCard) {
    function createSlug(string: string) {
        const slug = string.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
        return slug.replaceAll(' ', '_');
    }

    return (
        <div className="group relative">
            <Link
                href={`/blog/${createSlug(title)}`}
                className="absolute inset-0 z-10 hover:cursor-pointer"
            ></Link>
            <div
                data-animate="fade-up"
                className="mb-[3vw] overflow-hidden md:mb-7"
            >
                <Image
                    src={image.image}
                    alt={image.alt}
                    className="transition-transform duration-600 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="pointer-events-none relative z-15 leading-9">
                <span data-animate="fade-up" className="mb-[1vw] block">
                    {date}
                </span>
                <div
                    data-animate="fade-up"
                    className="pointer-events-auto mb-[1vw] block"
                >
                    <h2 className="cursor-text select-text">
                        <Link
                            href={`/blog/${createSlug(title)}`}
                            className="hover:underline"
                        >
                            {title}
                        </Link>
                    </h2>
                </div>
                <div
                    data-animate="fade-up"
                    className="underline underline-offset-[0.4em]"
                >
                    <strong>Read More</strong>
                </div>
            </div>
        </div>
    );
}
