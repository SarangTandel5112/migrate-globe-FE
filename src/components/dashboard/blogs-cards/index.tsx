"use client";
import { motion } from "framer-motion";
import Blog1 from "@assets/images/blog1.png";
import CommonCard from "@/components/layout/CommonCard";
import MyImage from "@/ui/myImage";
import Link from "next/link";
import { childVariants, containerVariants } from "@/utils/animation-variant";
import { BlogsCardsProps } from "@/utils/interface";
import { parseMarkdownTitle } from "@/utils/richTextParser";

const BlogsCards = ({ blog }: BlogsCardsProps) => {
    // Sort blogs by order and map to the required format
    const sortedBlogs = blog.insights_and_updates.sort((a, b) => a.order - b.order);
    const blogsArr = sortedBlogs.map(item => ({
        title: item.title,
        desc: item.description,
        image: Blog1, // Using placeholder image for now
        subtitle: item.subtitle,
    }));

    return (
        <motion.section
            className="sm:container-1200"
            initial="hidden"
            // initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
        >
            {/* Title animation */}
            <motion.div
                variants={childVariants}
                className="flex items-center justify-between mb-10 w-full"
            >
                <h2 className="text-left sm:text-center w-full text-heading-large md:text-3xl font-bold text-navy-blue">
                    {parseMarkdownTitle(blog.intro.title)}
                </h2>
                <button className="sm:hidden bg-mint-green-50 text-nowrap text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All
                </button>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                // initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="hidden sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {blogsArr.map((item, idx) => {
                    const hideOnMd = idx === 2 ? "hidden lg:block" : "";
                    return (
                        <motion.div
                            key={idx}
                            variants={childVariants} // ⭐ individual animation for each card
                            className={hideOnMd}
                        >
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
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Mobile view */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                // initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden space-y-4"
            >
                {blogsArr.map((blog, i) => (
                    <motion.div
                        key={i}
                        variants={childVariants}
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

                        <div className="text-center mt-3">
                            <Link
                                href="/"
                                className="text-mint-green-600 text-sm font-semibold underline"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button */}
            <motion.div
                variants={childVariants}
                className="hidden text-center mt-8 sm:flex justify-end"
            >
                <button className="bg-mint-green-50 text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All Blog Posts →
                </button>
            </motion.div>
        </motion.section>
    );
};

export default BlogsCards;
