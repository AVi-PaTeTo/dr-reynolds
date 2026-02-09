import Content from '@/components/blog/Content';
import Subscribe from '@/components/blog/Subscribe';
import Hero from '@/components/blog/Hero';

export default function Blog() {
    return (
        <div className="flex flex-col text-[var(--accent)] transition-all duration-400 ease-linear">
            <Hero />
            <Content />
            <Subscribe />
        </div>
    );
}
