import Image from 'next/image';
import recognition from '../public/resonance.jpg';
import office from '../src/assets/images/office1.webp';
import office2 from '../src/assets/images/office2.webp';
import office3 from '../src/assets/images/office3.webp';

import { ImageCarousel } from './ImageCarousel';

export default function MyOffice() {
    return (
        <section className="grid-sqs grid-flush relative bg-[var(--secondary)] pb-7 [--grid-cols:8] [--grid-rows:22] md:pb-0 md:[--grid-cols:24] md:[--grid-rows:17]">
            <div className="fade-up relative col-start-1 col-end-11 row-start-1 row-end-12 md:col-start-1 md:col-end-14 md:row-start-1 md:row-end-18">
                <div className="absolute inset-0">
                    <ImageCarousel
                        images={[office3, office, office2]}
                        imageClassName="
                            object-cover object-center
                            md:object-bottom-right
                        "
                    />
                </div>
            </div>
            <div className="col-start-2 col-end-10 row-start-13 row-end-23 md:col-start-15 md:col-end-26 md:row-start-6 md:row-end-13">
                <div>
                    <h2 className="fade-up mb-8 leading-[calc(1.2em*(1+(1-3)/25))]">
                        A space designed for clarity and calm.
                    </h2>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        I provide a quiet, private environment in Santa Monica
                        designed to feel grounding and ease the mind.
                    </p>
                    <p className="my-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        With natural light and a comfortable, uncluttered
                        setting, the space itself is intended to help you feel
                        at ease the moment you arrive.
                    </p>

                    <p className="mt-4 text-[calc((1.2-1)*(0.012*min(100vh,900px))+1rem)] md:text-[calc((1.2-1)*1.2vw+1rem)]">
                        For those seeking flexibility, I also offer secure
                        telehealth sessions for clients throughout California,
                        ensuring you have access to a supportive space
                        regardless of your location.
                    </p>
                </div>
            </div>
        </section>
    );
}
