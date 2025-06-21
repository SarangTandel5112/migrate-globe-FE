import React from "react";
import Blog1 from "@assets/images/blog1.png";
import CommonCard from "@/components/layout/CommonCard";
import MyImage from "@/ui/myImage";
import Link from "next/link";

const BlogsCards = () => {
    const blogsArr = [
        {
            title: "Top 5 Mistakes To Avoid During Your Visa Interview",
            desc: "Visa interviews can be stressful, but avoiding common pitfalls like incomplete answers or inconsistent information can greatly increase your chances of approval.",
            image: Blog1,
        },
        {
            title: "How To Choose The Right Country For Studying Abroad",
            desc: "Confused between Canada, Australia, or the UK? This guide breaks down the pros and cons of popular student destinations to help you make the best decision.",
            image: Blog1,
        },
        {
            title: "Understanding Your Visa Rejection: Next Steps",
            desc: "Got a visa refusal? Don’t panic. We explain the most common reasons for rejections and how you can reapply with confidence.",
            image: Blog1,
        },
    ];
    return (
        <section className="sm:container-1200">
            <div className="flex items-center justify-between mb-10 w-full">
                <h2 className="text-left sm:text-center w-full text-heading-large md:text-3xl font-bold text-navy-blue">
                    From Our Blog
                </h2>
                <button className="sm:hidden bg-mint-green-50 text-nowrap text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All
                </button>
            </div>

            <div className="sm:hidden space-y-4">
                {blogsArr.map((blog, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                        <div className="flex gap-4 items-start">
                            <MyImage
                                src={blog.image}
                                alt={blog.title}
                                width={120}
                                height={80}
                                className="w-24 h-32 object-cover rounded-md flex-shrink-0"
                            />

                            <div className="flex flex-col justify-between">
                                <h3 className="text-heading2 font-semibold text-navy-blue mb-1 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-navy-blue-400 line-clamp-4 min-h-[3rem]">
                                    {blog.desc}
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-3">
                            <Link
                                href="/"
                                className="text-mint-green-600 text-sm font-semibold underline"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsArr
                    .slice(0, 3) // max 3 total
                    .map((item, idx) => {
                        // Now hide last one on md
                        const hideOnMd = idx === 2 ? "hidden lg:block" : "";

                        return (
                            <div key={idx} className={` ${hideOnMd}`}>
                                <CommonCard
                                    image={{
                                        src: item.image,
                                        alt: item.title,
                                        heightClass: "h-48",
                                    }}
                                    title={item.title}
                                    description={item.desc}
                                    link={{
                                        href: "#",
                                        label: "Read More ",
                                        className: "text-mint-green-600",
                                    }}
                                    wrapperClassName="h-full flex flex-col shadow-sm border-gray-200 hover:shadow-md"
                                    contentClassName="gap-3 flex-grow flex flex-col"
                                />
                            </div>
                        );
                    })}
            </div>

            <div className="hidden text-center mt-8 sm:flex justify-end">
                <button className="bg-mint-green-50 text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All Blog Posts →
                </button>
            </div>
        </section>
    );
};

export default BlogsCards;
