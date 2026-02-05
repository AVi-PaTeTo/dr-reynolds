export default function ReachOut() {
    return (
        <section className="relative flex h-[693px] items-center bg-[var(--accent)] text-[var(--primary)]">
            <div className="h-fit py-[6.6vmax] text-center">
                <div className="grid-sqs relative h-fit [--grid-cols:8] [--grid-rows:4] md:[--grid-cols:24] md:[--grid-rows:9]">
                    <div className="col-start-2 col-end-10 row-start-1 row-end-2 md:col-start-8 md:col-end-20 md:row-start-2 md:row-end-7">
                        <h3
                            data-animate="fade-up"
                            className="mb-8 text-[calc((2.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((2.5-1)*1.2vw+1rem)]"
                        >
                            Get started today.
                        </h3>
                        <p
                            data-animate
                            className="mt-4 text-[calc((1.5-1)*(.012*min(100vh,900px))+1rem)] md:text-[calc((1.5-1)*1.2vw+1rem)]"
                        >
                            Ready to take the first step towards a happier,
                            healthier you?
                            <br />
                            Contact me to book your first session. I look
                            forward to starting this therapeutic journey with
                            you.
                        </p>
                    </div>
                    <div
                        data-animate="fade-up"
                        className="col-start-4 col-end-8 row-start-3 row-end-5 md:col-start-5 md:col-end-23 md:row-start-8 md:row-end-10"
                    >
                        <button className="mx-auto flex h-fit w-fit items-center gap-2 border-1 border-[var(--primary)] px-[2em] py-[1em] text-[calc((0.9-1)*(.012*min(100vh,900px))+1rem)] font-[500] tracking-wider transition-colors duration-400 ease-linear hover:cursor-pointer hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:outline-[var(--primary)] md:text-[calc((0.9-1)*1.2vw+1rem)]">
                            GET IN TOUCH
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                className="shrink-0"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
