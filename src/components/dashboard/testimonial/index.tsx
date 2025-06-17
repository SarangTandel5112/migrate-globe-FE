import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import RahulImg from "@assets/images/rahul.png";
function Testimonials() {
    return (
        <div className="container-1200">
            <h2 className="text-center text-navy-blue text-heading-large font-semibold mb-8">
                What Our Clients Says
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6">
                {/* Left: Client Image + Label */}
                <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col items-center bg-[#FADADA] rounded-xl p-4 relative">
                    <MyImage
                        src={RahulImg}
                        alt="Rahul Mehra"
                        className="rounded-xl w-full object-cover"
                    />
                    <div className="bg-white px-3 py-1 rounded-md text-xs mt-3 text-navy-blue text-center shadow">
                        Rahul Mehra
                        <br />
                        Skilled Independent Visa – Subclass 189
                    </div>
                </div>

                {/* Right: Text & Arrows */}
                <div className="flex flex-col text-left justify-between w-full">
                    {/* Top Label */}
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">
                            // Success Stories
                        </p>
                    </div>

                    {/* Middle Content */}
                    <div className="">
                        <h3 className="text-heading-large2 font-semibold text-navy-blue mb-4 leading-snug">
                            Landing My Dream Job In Australia – Stress-Free!
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            MigrateGlobe made the entire visa process crystal
                            clear. I used their visa points calculator and
                            instantly knew I was eligible for Subclass 189.
                            Their team helped fine-tune my documentation and
                            guided me through every government touchpoint.
                            Today, I'm living and working in Sydney as a Data
                            Analyst — all thanks to them!
                        </p>
                    </div>

                    {/* Bottom Arrows */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button className="w-10 h-10 rounded-full bg-[#f0f1f7] flex items-center justify-center">
                            <MyImage
                                src={RightIcon}
                                alt="left-icon"
                                className="rotate-180 w-3 h-3"
                            />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-navy-blue text-white flex items-center justify-center">
                            <MyImage
                                src={RightIcon}
                                alt="right-icon"
                                className="w-3 h-3"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
