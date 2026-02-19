// 'use client';

import { postsList } from './postData';
import Link from 'next/link';

type BlogPostProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return postsList.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;

    const post = postsList.find((p) => p.slug === slug);

    return (
        <section className="bg-[var(--primary)] text-[var(--accent)]">
            <span className="top-0 flex w-full items-center justify-between bg-[var(--primary)] p-[6vw] lg:px-[3.75vw] lg:py-[1vw]">
                <span className="pb-2 text-[calc((1.2-1)*calc(.012*min(100vh,900px))+1rem)] font-[510] text-transparent hover:cursor-pointer md:pb-0 md:text-[calc((2-1)_*_1.2vw_+_1rem)]">
                    x
                </span>
            </span>
            <div className="p-[6vw] text-center text-[var(--accent)]">
                <div className="mx-auto flex flex-col items-center">
                    <div className="pb-8 md:max-w-[70%]">
                        <p data-animate="fade-up" className="pb-4">
                            {post?.date}
                        </p>
                        <h1 data-animate="fade-up" className="leading-13">
                            {post?.title}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4 p-4 md:max-w-[55vw]">
                        {post?.content.map((para, key) => {
                            return (
                                <p data-animate key={key}>
                                    {para}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between px-[6vw] py-[3vw]">
                {post?.prev && (
                    <Link className="mr-auto" href={`/blog/${post.prev}`}>
                        <div
                            data-animate="fade-up"
                            className="flex items-center hover:cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m8.82 12l7.715 7.716q.22.22.218.528t-.224.529q-.221.221-.529.221t-.529-.221L7.83 13.136q-.243-.242-.354-.54q-.112-.298-.112-.596t.112-.596t.354-.54l7.64-7.644q.221-.221.534-.218q.31.003.531.224t.222.529t-.222.528z"
                                />
                            </svg>
                            <h2>Prev</h2>
                        </div>
                    </Link>
                )}
                {post?.next && (
                    <Link
                        className="ml-auto hover:cursor-pointer"
                        href={`/blog/${post.next}`}
                    >
                        <div
                            data-animate="fade-up"
                            className="flex items-center hover:cursor-pointer"
                        >
                            <h2>Next</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z"
                                />
                            </svg>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    );
}
