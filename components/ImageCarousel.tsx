'use client';

import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

type ImageCarouselProps = {
    images: StaticImageData[];
    imageClassName?: string;
};

export function ImageCarousel({
    images,
    imageClassName = '',
}: ImageCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    const autoplay = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    React.useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            className="group h-full w-full overflow-clip"
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.reset()}
        >
            <CarouselContent className="h-full">
                {images.map((img, index) => (
                    <CarouselItem
                        key={index}
                        className="h-full flex-none basis-full"
                    >
                        <div className="relative h-full w-full overflow-hidden">
                            <Image
                                src={img}
                                alt="Contemporary open-plan office lounge with grey sofas, large windows, and neutral decor"
                                fill
                                className={imageClassName}
                                priority={index === 0}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            'h-1.5 rounded-full shadow-sm transition-all duration-300 hover:cursor-pointer',
                            current === index
                                ? 'w-8 bg-white'
                                : 'w-1.5 bg-white/60 hover:bg-white/70'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    );
}
