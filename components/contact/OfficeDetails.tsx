import OfficeMap from './Map';

export default function OfficeDetails() {
    return (
        <section className="bg-[var(--secondary)] py-[2vw] text-[var(--accent)]">
            <div className="py-[6.6vw]">
                <div className="grid-sqs [--grid-cols:8] [--grid-rows:20] md:[--grid-cols:24] md:[--grid-rows:10]">
                    <div className="col-start-2 col-end-10 row-start-1 row-end-5 md:col-start-2 md:col-end-13 md:row-start-1 md:row-end-6">
                        <h3
                            data-animate="fade-up"
                            className="mb-5 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
                        >
                            My Office
                        </h3>
                        <p
                            data-animate="fade-up"
                            className="mt-4 text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]"
                        >
                            123th Street 45 W,
                            <br />
                            Santa Monica, CA 90401
                        </p>
                    </div>
                    <div className="col-start-2 col-end-10 row-start-6 row-end-9 md:col-start-2 md:col-end-13 md:row-start-6 md:row-end-10">
                        <h3
                            data-animate="fade-up"
                            className="mb-5 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
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
                    <div
                        data-animate="fade-up"
                        className="col-start-2 col-end-10 row-start-10 row-end-21 md:col-start-13 md:col-end-26 md:row-start-1 md:row-end-11"
                    >
                        <OfficeMap />
                    </div>
                </div>
            </div>
        </section>
    );
}
