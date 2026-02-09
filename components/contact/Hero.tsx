import Image from 'next/image';
import connect from '@/src/assets/images/connect.webp';
import badge from '@/src/assets/images/badge.webp';

export default function Hero() {
    return (
        <>
            <section className="flex h-fit flex-col items-center bg-[var(--accent)] text-[var(--primary)]">
                <span className="top-0 flex w-full items-center justify-between bg-[var(--accent)] p-[6vw] lg:px-[3.75vw] lg:py-[1vw]">
                    <span className="pb-2 text-[calc((1.2-1)*calc(.012*min(100vh,900px))+1rem)] font-[510] text-transparent hover:cursor-pointer md:pb-0 md:text-[calc((2-1)_*_1.2vw_+_1rem)]">
                        X
                    </span>
                </span>
                <div className="grid-sqs h-fit w-full py-[6.6vmax] [--grid-cols:8] [--grid-rows:21] md:[--grid-cols:24] md:[--grid-rows:18]">
                    <div
                        data-animate="fade-up"
                        className="col-start-2 col-end-10 row-start-1 row-end-3 md:col-start-3 md:col-end-25 md:row-start-1 md:row-end-4"
                    >
                        <h1 className="text-center md:text-left">
                            Let's Connect
                        </h1>
                    </div>
                    <div className="col-start-2 col-end-10 row-start-3 row-end-6 text-center md:col-start-3 md:col-end-12 md:row-start-4 md:row-end-8 md:text-left">
                        <p data-animate>
                            Starting therapy can feel like a big decision — and
                            it’s okay to take it one step at a time.
                        </p>
                        <br />
                        <p data-animate>
                            Get in touch for questions, or to book a free
                            15-minute consultation.
                        </p>
                    </div>
                    <div
                        data-animate="fade-up"
                        className="relative col-start-2 col-end-10 row-start-6 row-end-13 md:col-start-3 md:col-end-9 md:row-start-8 md:row-end-17"
                    >
                        <div className="absolute inset-0">
                            <div className="mx-auto aspect-[2/3] h-full overflow-hidden rounded-t-full">
                                <Image src={connect} alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div
                        data-animate
                        className="relative col-start-6 col-end-9 row-start-11 row-end-14 md:col-start-6 md:col-end-11 md:row-start-14 md:row-end-18"
                    >
                        <div className="absolute inset-0">
                            <div className="mx-auto aspect-square h-full overflow-hidden rounded-full">
                                <Image src={badge} alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-10 row-start-14 row-end-22 md:col-start-14 md:col-end-25 md:row-start-5 md:row-end-17">
                        <div
                            data-animate
                            className="h-full w-full bg-slate-200 p-[6%]"
                        >
                            <p className="text-[var(--accent)]">
                                PLEASE NOTE: If you opt to use a “Form Block” on
                                your contact page this is not HIPAA-compliant.
                                Squarespace stores data that is input into forms
                                in the Marketing tab under Profiles. Instead,
                                you can embed a HIPAA-compliant form, a link to
                                your client portal, or simply put your email
                                address.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
