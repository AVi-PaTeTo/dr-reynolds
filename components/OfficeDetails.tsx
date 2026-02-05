export function Details() {
    return (
        <section className="py-[3.3vmax]">
            <div className="grid-sqs w-full text-center [--grid-cols:8] [--grid-rows:15] md:text-left md:[--grid-cols:24] md:[--grid-rows:7]">
                <div className="col-start-2 col-end-10 row-start-1 row-end-7 md:col-start-2 md:col-end-18 md:row-start-1 md:row-end-7">
                    <h3
                        data-animate="fade-up"
                        className="mb-8 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
                    >
                        Dr. Maya Reynolds
                    </h3>
                    <p
                        data-animate="fade-up"
                        className="mt-4 text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]"
                    >
                        123th Street 45 W,
                        <br />
                        Santa Monica, CA 90401
                        <br />
                        <br />
                        <a
                            className="underline underline-offset-[.2em]"
                            href=""
                        >
                            email@example.com
                            <br />
                        </a>
                        <a
                            className="underline underline-offset-[.2em]"
                            href=""
                        >
                            (500) 555-555
                            <br />
                        </a>
                    </p>
                </div>
                <div className="col-start-2 col-end-10 row-start-8 row-end-11 md:col-start-18 md:col-end-22 md:row-start-1 md:row-end-4">
                    <h3
                        data-animate="fade-up"
                        className="mb-8 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
                    >
                        Hours
                    </h3>
                    <p
                        data-animate="fade-up"
                        className="mt-4 text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]"
                    >
                        Monday – Friday
                        <br />
                        10am – 6pm
                    </p>
                </div>
                <div className="col-start-2 col-end-10 row-start-12 row-end-16 text-center md:col-start-22 md:col-end-26 md:row-start-1 md:row-end-4 md:text-right">
                    <h3
                        data-animate="fade-up"
                        className="mb-8 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
                    >
                        Find
                    </h3>
                    <p
                        data-animate="fade-up"
                        className="mt-4 text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]"
                    >
                        <a
                            className="underline underline-offset-[.2em]"
                            href=""
                        >
                            Home
                            <br />
                        </a>
                        <a
                            className="underline underline-offset-[.2em]"
                            href=""
                        >
                            Contact
                            <br />
                        </a>
                        <a
                            className="underline underline-offset-[.2em]"
                            href=""
                        >
                            Blog
                            <br />
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
