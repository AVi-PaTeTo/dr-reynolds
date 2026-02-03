import Image from "next/image";
import resonance from "../public/resonance.jpg";

export default function Resonance() {
    return (
        <section className="relative section-grid bg-[var(--secondary)]">
            <div className="row-start-1 row-end-9 col-start-1 col-end-11 md:col-start-14 md:col-end-27 md:row-start-1 md:row-end-18">
                <div className="h-full w-full overflow-hidden">
                    <Image
                        src={resonance}
                        alt=""
                        className="aspect-square h-[269px] md:h-full md:w-full object-cover object-bottom md:object-bottom-left"
                    />
                </div>
            </div>
            <div className="row-start-10 row-end-21 col-start-2 col-end-10 md:col-start-2 md:col-end-13 md:row-start-6 md:row-end-13">
                <div>
                    <h2 className="text-[calc(((3-1)*0.012*min(100vh,900px))+1rem)] leading-[calc(1.2em*(1+(1-3)/25))] mb-8 font-medium">
                        From getting through it to actually thriving.
                    </h2>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)]">
                        You’re used to pushing through stress — professionally
                        and personally.
                    </p>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)]">
                        I offer a grounded, private space.
                    </p>
                    <p className="mt-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)]">
                        A place to slow down, clarify what matters, and move
                        forward.
                    </p>
                </div>
            </div>
            <div className="row-start-21 row-end-23 col-start-1 col-end-11 md:col-start-1 md:col-end-14 md:row-start-17 md:row-end-18">
                <button className="mx-auto px-[2em] py-[.8em] border-t-1 md:border-t-2 w-full h-fit font-[510] text-[calc((0.9-1)*1.2vw+1rem)] hover:text-[var(--primary)] hover:bg-[var(--accent)] border-[var(--accent)] transition-colors duration-400 ease-linear">
                    GET IN TOUCH →
                </button>
            </div>
        </section>
    );
}
