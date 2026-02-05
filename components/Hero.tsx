import Image from 'next/image';
import hero from '@/src/assets/images/hero2.webp';

export default function Hero() {
    return (
        <section className="relative flex h-screen min-h-fit w-full items-center bg-[var(--primary)] pt-[72px]">
            <div className="grid-sqs w-full [--grid-cols:8] [--grid-rows:20] md:[--grid-cols:24] md:[--grid-rows:22]">
                <div className="fade-up relative col-start-2 col-end-10 row-start-2 row-end-10 md:col-start-2 md:col-end-12 md:row-start-2 md:row-end-23">
                    <div className="flex h-full justify-center overflow-hidden">
                        <div className="overflow-hidden rounded-t-full">
                            <Image
                                src={hero}
                                priority
                                alt="Hero Image"
                                className="aspect-auto h-[269px] w-fit object-cover md:h-fit"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-start-2 col-end-10 row-start-10 row-end-15 flex flex-col items-center justify-center text-center leading-relaxed md:col-start-13 md:col-end-25 md:row-start-7 md:row-end-13">
                    <h1 className="fade-up mb-8 max-w-full leading-[calc(1.2em*(1+(1-4.5)/25))] sm:max-w-[70%] md:max-w-full">
                        Find your internal ease.
                    </h1>
                    <p className="fade-up max-w-full text-lg sm:max-w-[70%] md:max-w-full">
                        Therapy for anxiety, trauma, and burnout for
                        high-achieving adults in Santa Monica and across
                        California.
                    </p>
                </div>

                <div className="fade-up md col-start-2 col-end-10 row-start-15 row-end-18 flex flex-col justify-center text-center md:col-start-13 md:col-end-25 md:row-start-13 md:row-end-15">
                    <button className="mx-auto flex h-fit w-fit gap-2 border-1 border-[-var(--acce)] border-[var(--accent)] px-[2em] py-[1em] text-[calc((0.9-1)*1.2vw+1rem)] font-[510] transition-colors duration-400 ease-linear hover:cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--primary)]">
                        CONNECT WITH ME
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
