import blog1 from '@/src/assets/images/blog1.webp';
import blog2 from '@/src/assets/images/blog2.webp';
import blog3 from '@/src/assets/images/blog3.webp';
import blog4 from '@/src/assets/images/blog4.webp';

import Card from './Card';

export default function Content() {
    const blogs = [
        {
            image: {
                image: blog1,
                alt: 'Person sitting sideways on a chair, knees drawn up, looking out a bright window',
            },
            title: "Burnout Isn't a Personal Failure",
            date: '28/12/2025',
        },
        {
            image: {
                image: blog2,
                alt: 'A person standing alone on a rock at the edge of a calm body of water',
            },
            title: 'Why Anxiety Shows Up in the Body',
            date: '7/1/2026',
        },
        {
            image: {
                image: blog3,
                alt: 'An empty wooden bench in a quiet forest with sunlight filtering through tall trees.',
            },
            title: "Therapy Isn't About Fixing You",
            date: '15/1/2026',
        },
        {
            image: {
                image: blog4,
                alt: 'A person lying on their back in a field of green foliage with small yellow flowers',
            },
            title: "You Don't Have to Hit Rock Bottom to Start Therapy",
            date: '21/1/2026',
        },
    ];

    return (
        <section className="bg-[var(--secondary)] px-[6vw] py-[3.75vw] md:px-[3.75vw]">
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-[125px] md:gap-y-[66px]">
                {blogs.map((blog, i) => (
                    <Card
                        key={i}
                        image={blog.image}
                        title={blog.title}
                        date={blog.date}
                    />
                ))}
            </div>
        </section>
    );
}
