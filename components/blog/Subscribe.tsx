export default function Subscribe() {
    return (
        <section className="bg-[var(--accent)] py-[3vmax] text-[var(--primary)]">
            <div className="py-[6.6vmax]">
                <div className="grid-sqs [--grid-cols:8] [--grid-rows:8] md:[--grid-cols:24] md:[--grid-rows:8]">
                    <div className="col-start-2 col-end-10 row-start-1 row-end-10 border-1 p-[6%] md:col-start-5 md:col-end-23 md:row-start-1 md:row-end-10">
                        <div className="flex h-full w-full flex-col items-center">
                            <h2
                                data-animate="fade-up"
                                className="line mb-4 text-center leading-9"
                            >
                                Subscribe
                            </h2>
                            <p
                                data-animate="fade-up"
                                className="my-4 text-center"
                            >
                                Sign up with your email address to receive news
                                and updates.
                            </p>
                            <div
                                data-animate
                                className="mb-4 flex flex-wrap justify-center"
                            >
                                <div className="mt-4 mr-1 px-1 py-2">
                                    <input
                                        className="border-1 bg-[var(--primary)] px-[2rem] py-[1.4rem] text-[var(--accent)]"
                                        type="email"
                                        name="email"
                                        id=""
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="mt-4 ml-1 px-1 py-2">
                                    <button className="shrink-0 flex-nowrap border-1 px-[2rem] py-[1.4rem] transition-colors duration-400 ease-linear hover:cursor-pointer hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:border-[var(--primary)]">
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                            <p data-animate="fade-up" className="mt-4">
                                I respect your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
