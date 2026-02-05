import Image from 'next/image';
import resonance from '@/src/assets/images/resonance.webp';

export default function Resonance() {
    return (
        <section className="grid-sqs grid-flush relative bg-[var(--secondary)] [--grid-cols:8] [--grid-rows:22] md:[--grid-cols:24] md:[--grid-rows:17]">
            <div className="fade-up col-start-1 col-end-11 row-start-1 row-end-9 md:col-start-14 md:col-end-27 md:row-start-1 md:row-end-18">
                <div className="h-full w-full overflow-hidden">
                    <Image
                        src={resonance}
                        alt=""
                        className="aspect-square h-[269px] w-full object-cover object-bottom md:h-full md:object-bottom-left"
                    />
                </div>
            </div>
            <div className="col-start-2 col-end-10 row-start-10 row-end-21 md:col-start-2 md:col-end-13 md:row-start-6 md:row-end-13">
                <div>
                    <h2 className="fade-up mb-8 leading-[calc(1.2em*(1+(1-3)/25))]">
                        From getting through it to actually thriving.
                    </h2>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        You’re used to pushing through stress. Therapy offers a
                        space to slow down, clarify what matters, and move
                        forward more sustainably.
                    </p>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        My approach is warm, collaborative, and grounded.
                        Sessions are structured yet flexible, integrating
                        evidence-based practices such as CBT, EMDR,
                        mindfulness-based, and body-oriented techniques to
                        address anxiety, trauma, and burnout.
                    </p>
                    <p className="mt-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        Over time, the work focuses on restoring clarity,
                        steadiness, and a stronger sense of internal safety —
                        not just managing symptoms, but developing a more
                        sustainable way of living and working.
                    </p>
                </div>
            </div>
            <div className="fade-up col-start-1 col-end-11 row-start-21 row-end-23 md:col-start-1 md:col-end-14 md:row-start-16 md:row-end-18">
                <button className="flex h-full w-full items-center justify-center gap-2 border-t-1 border-[var(--accent)] px-[2em] text-[calc((0.9-1)*1.2vw+1rem)] font-[500] tracking-wide transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--primary)] md:border-t-2">
                    GET IN TOUCH
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
        </section>
    );
}
