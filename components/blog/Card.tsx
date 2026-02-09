import Image from 'next/image';
import Link from 'next/link';

export default function Card(props) {
    function createSlug(string: string) {
        const slug = string.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
        return slug.replaceAll(' ', '_');
    }

    return (
        <div className="group relative">
            <Link
                href={`/blog/${createSlug(props.title)}`}
                className="absolute inset-0 z-10 hover:cursor-pointer"
            ></Link>
            <div
                data-animate="fade-up"
                className="mb-[3vw] overflow-hidden md:mb-7"
            >
                <Image
                    src={props.image.image}
                    alt={props.image.alt}
                    className="transition-transform duration-600 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="pointer-events-none relative z-15 leading-9">
                <span data-animate="fade-up" className="mb-[1vw] block">
                    {props.date}
                </span>
                <div
                    data-animate="fade-up"
                    className="pointer-events-auto mb-[1vw] block"
                >
                    <h2 className="cursor-text select-text">
                        <Link
                            href={`/blog/${createSlug(props.title)}`}
                            className="hover:underline"
                        >
                            {props.title}
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
