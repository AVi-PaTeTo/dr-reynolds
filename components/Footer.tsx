export default function Footer() {
    return (
        <footer className="w-full bg-slate-200 py-[calc(10vmax/10)]">
            <div className="grid-sqs [--grid-cols:8] [--grid-rows:4] md:[--grid-cols:24] md:[--grid-rows:5]">
                <div className="col-start-2 col-end-10 row-start-1 row-end-3 md:col-start-2 md:col-end-26 md:row-start-2 md:row-end-4">
                    <div className="flex flex-wrap justify-center gap-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] leading-5 text-nowrap wrap-break-word underline underline-offset-[.2em] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        <a href="">Privacy & Cookies Policy </a>
                        <a href="">Good Faith Estimate </a>
                        <a href=""> Website Terms & Conditions </a>
                        <a href="">Disclaimer</a>
                    </div>
                </div>
                <div className="col-start-2 col-end-10 row-start-3 row-end-5 md:col-start-6 md:col-end-22 md:row-start-5 md:row-end-6">
                    <div>
                        <div className="mt-4 text-center text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] text-[var(--accent)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                            All Rights Reserved © 2024 Your Business Name Here,
                            LLC.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
