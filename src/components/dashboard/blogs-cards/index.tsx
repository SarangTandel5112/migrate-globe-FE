import React from 'react'
import Blog1 from '@assets/images/blog1.png'
import MyImage from '@/ui/myImage'
import RightIcon from '@assets/images/right-icon.svg'
import CommonCard from '@/components/layout/CommonCard'
import VideoCard from '@/components/layout/VideoCard'

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
        }
    ]
    return (
        <div className=" py-16 px-4 sm:px-6 lg:px-20">
            {/* Blog Section */}
            <section className="mb-16">
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-navy-blue mb-10">From Our Blog</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogsArr?.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <CommonCard
                                image={{ src: item.image, alt: item.title, heightClass: "h-48" }}
                                title={item.title}
                                description={item.desc}
                                link={{ href: "#", label: "Read More ", className: "text-mint-green-600" }}
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

            {/* Videos Section */}
            <section>
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-navy-blue mb-10">Watch Our Videos</h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Top 5 Mistakes To Avoid During Your Visa Interview"
                        description="Visa interviews can be stressful — avoid these common mistakes!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Top 5 Mistakes To Avoid During Your Visa Interview"
                        description="Visa interviews can be stressful — avoid these common mistakes!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Top 5 Mistakes To Avoid During Your Visa Interview"
                        description="Visa interviews can be stressful — avoid these common mistakes!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                    {/* {[
                        "/thumb1.jpg",
                        "/thumb2.jpg",
                        "/thumb3.jpg",
                    ].map((thumb, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="relative">
                                <img src={thumb} alt="Video Thumbnail" className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img src="/play-icon.svg" alt="Play" className="w-12 h-12" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-base text-navy-blue">
                                    Top 5 Mistakes To Avoid During Your Visa Interview
                                </h3>
                            </div>
                        </div>
                    ))} */}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#f0f1f7]" ><MyImage src={RightIcon} alt='left-icon' className='rotate-180 w-3 h-3 m-auto' /></button>
                    <button className="w-10 h-10 rounded-full bg-navy-blue" ><MyImage src={RightIcon} alt='left-icon' className='w-3 h-3 m-auto' /></button>
                </div>
            </section>
        </div>

    )
}

export default BlogsCards