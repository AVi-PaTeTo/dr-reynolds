import Image from 'next/image';
import blog from '@/src/assets/images/blogs.webp';

export default function Hero() {
    return (
        <section className="flex h-fit flex-col items-center bg-[var(--primary)]">
            <span className="top-0 flex w-full items-center justify-between bg-[var(--primary)] p-[6vw] text-[var(--accent)] lg:px-[3.75vw] lg:py-[1vw]">
                <span className="text-[calc((1.2-1)*calc(.012*min(100vh,900px))+1rem)] font-[510] text-transparent hover:cursor-pointer md:text-[calc((2-1)_*_1.2vw_+_1rem)]">
                    x
                </span>
            </span>
            <div className="grid-sqs h-fit w-full py-[3.3vmax] [--grid-cols:8] [--grid-rows:19] md:[--grid-cols:24] md:[--grid-rows:17]">
                <div className="relative col-start-2 col-end-10 row-start-2 row-end-9 md:col-start-2 md:col-end-13 md:row-start-1 md:row-end-18">
                    <div data-animate="fade-up" className="absolute inset-0">
                        <div className="mx-auto aspect-[2/3] h-full max-w-full overflow-hidden rounded-t-full">
                            <Image
                                src={blog}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative col-start-3 col-end-9 row-start-9 row-end-13 flex items-center text-center md:col-start-13 md:col-end-24 md:row-start-3 md:row-end-8 md:text-left">
                    <h1
                        data-animate="fade-up"
                        className="leading-[calc(1.2em*(1+(1-4.5)/25))]"
                    >
                        From the Therapy Room
                    </h1>
                </div>
                <div className="relative col-start-3 col-end-9 row-start-13 row-end-19 text-center md:col-start-13 md:col-end-21 md:row-start-8 md:row-end-14 md:text-left">
                    <p data-animate className="mb-4">
                        Insights, reflections, and practical guidance for
                        navigating stress, healing, and growth.
                    </p>
                    <p data-animate className="mt-4">
                        <strong>Take a moment to settle in.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}
