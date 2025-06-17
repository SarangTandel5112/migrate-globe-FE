import React from "react";
import Blog1 from "@assets/images/blog1.png";
import CommonCard from "@/components/layout/CommonCard";

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
        <section className="container-1200">
            <h2 className="text-center text-heading-large md:text-3xl font-semibold text-navy-blue mb-10">
                From Our Blog
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogsArr?.map((item, idx) => (
                    <React.Fragment key={idx}>
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
                            wrapperClassName="shadow-sm border-gray-200 hover:shadow-md "
                            contentClassName="gap-3"
                        />
                    </React.Fragment>
                ))}
            </div>

            <div className="text-center mt-8 flex justify-end">
                <button className="bg-mint-green-50 text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All Blog Posts →
                </button>
            </div>
        </section>
    );
};

export default BlogsCards;
