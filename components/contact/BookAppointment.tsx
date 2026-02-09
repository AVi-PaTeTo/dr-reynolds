export default function BookAppointment() {
    return (
        <section className="bg-[var(--primary)]">
            <div className="grid-sqs py-[6.6vmax] [--grid-cols:8] [--grid-rows:25] md:[--grid-cols:24] md:[--grid-rows:16]">
                <div className="col-start-2 col-end-10 row-start-1 row-end-8 md:col-start-8 md:col-end-20 md:row-start-1 md:row-end-7">
                    <h2
                        data-animate="fade-up"
                        className="mb-8 text-center leading-9"
                    >
                        Book an appointment.
                    </h2>
                    <p data-animate>
                        Add some text here if you like, and add your scheduling
                        widget below (you can get one by signing up for a
                        scheduling account through Squarespace, the top-tier
                        plan is HIPAA compliant OR you can use your client
                        portal).
                    </p>
                </div>
                <div className="col-start-2 col-end-10 row-start-9 row-end-26 md:col-start-5 md:col-end-23 md:row-start-7 md:row-end-17">
                    <div className="flex h-full w-full flex-col items-center justify-center pt-15 font-serif text-black">
                        <div
                            data-animate
                            className="mx-auto h-fit w-full max-w-[520px] items-center bg-slate-100 px-5 py-[50px] text-center shadow-md sm:w-[70%] sm:px-[75px]"
                        >
                            <h4 className="text-[26px] font-bold">
                                This page is not active
                            </h4>
                            <span className="my-4 block">
                                If you're the owner, please log into your
                                account to start a free trial or subscribe.
                            </span>
                            <div className="mx-auto mt-8 w-fit bg-slate-950 px-4 py-2 font-sans text-sm text-slate-100">
                                <button>GO TO ACCOUNT</button>
                            </div>
                        </div>
                        <div
                            data-animate="fade-up"
                            className="mt-50 mb-4 text-center"
                        >
                            <span className="block">Powered by</span>
                            <span className="block text-xl font-bold">
                                acuity:scheduling
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
