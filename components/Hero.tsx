import Image from "next/image";
import hero from "../public/hero2.webp";

export default function Hero() {
    return (
        <section className="relative flex items-center w-full h-screen min-h-fit pt-[72px] bg-[var(--primary)] ">
            <div className="w-full grid-sqs [--grid-cols:8] [--grid-rows:20] md:[--grid-cols:24] md:[--grid-rows:22]">
                <div
                    className="col-start-2 col-end-10 row-start-2 row-end-10 
                            md:col-start-2 md:col-end-12 md:row-start-2 md:row-end-23 
                            relative "
                >
                    <div className="flex overflow-hidden h-full justify-center">
                        <div className="overflow-hidden rounded-t-full">
                            <Image
                                src={hero}
                                priority
                                alt="Hero Image"
                                className="h-[269px] md:h-fit aspect-auto w-fit object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="col-start-2 col-end-10 row-start-10 row-end-15 
                            md:col-start-13 md:col-end-25 md:row-start-7 md:row-end-13
                            flex flex-col justify-center items-center text-center leading-relaxed"
                >
                    <h1 className="mb-8 max-w-full sm:max-w-[70%] md:max-w-full text-[calc((4.5-1)*0.012*min(100vh,900px)+1rem)] leading-[calc(1.2em*(1+(1-4.5)/25))] md:text-[calc((4.5-1)*1.2vw+1rem)]">
                        Find your internal ease.
                    </h1>
                    <p className="text-lg max-w-full sm:max-w-[70%] md:max-w-full">
                        Therapy for high-achieving adults in Santa Monica &
                        across California.
                    </p>
                </div>

                <div
                    className="col-start-2 col-end-10 row-start-15 row-end-18 
                            md:col-start-13 md:col-end-25 md:row-start-13 md:row-end-15  md
                            flex flex-col justify-center text-center"
                >
                    <button className="mx-auto px-[2em] py-[1em] border-1 border-[-var(--acce)] w-fit h-fit font-[510] text-[calc((0.9-1)*1.2vw+1rem)] hover:text-[var(--primary)] hover:bg-[var(--accent)] border-[var(--accent)] transition-colors duration-400 ease-linear">
                        CONNECT WITH ME →
                    </button>
                </div>
            </div>
        </section>
    );
}
