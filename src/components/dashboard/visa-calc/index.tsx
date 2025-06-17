"use client";
import MyImage from "@/ui/myImage";
import Illustration from "@assets/images/Illustration.svg";
import RightIcon from "@assets/images/right-icon.svg";
import RahulImg from "@assets/images/rahul.png";
import { motion } from "framer-motion";

const VisaCalculatorSection = () => {
    return (
        <section className="py-12 px-4 lg:px-0">
            {/* Top Section: Visa Calculator */}
            <div className="container-1200 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-10 py-16 items-center">
                {/* Left Column: Text & CTA */}
                <div className="text-navy-blue">
                    <h2 className="text-heading-large font-semibold mb-4">
                        Visa Calculator
                    </h2>
                    <p className="text-description1 leading-relaxed mb-6">
                        Use our free points calculator to check your eligibility
                        under Subclass 189, 190, or 491 visas. Find out if
                        you're eligible for Australian PR.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-navy-blue text-navy-blue text-white px-6 py-2 rounded-md text-sm hover:bg-[#1f2e59] transition"
                    >
                        Start Calculator
                    </motion.button>
                </div>

                {/* Middle Column: Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 - How It Works */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-navy-blue text-sm">
                        <h3 className="font-semibold text-heading1 mb-6">
                            How It Works
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <strong>Step 1:</strong> Choose Your Visa
                                Subclass
                            </li>
                            <li>
                                <strong>Step 2:</strong> Answer 10 Simple
                                Questions
                            </li>
                            <li>
                                <strong>Step 3:</strong> Get Your Estimated
                                Points Instantly
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 - Who Is It For */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-navy-blue text-sm">
                        <h3 className="font-semibold text-heading1 mb-6">
                            Who Is It For?
                        </h3>
                        <ul className="space-y-2">
                            <li>🎓 Recent Graduates</li>
                            <li>💼 Skilled Professionals</li>
                            <li>👨‍👩‍👧 Families Planning Migration</li>
                        </ul>
                    </div>

                    {/* Card 3 - Testimonials/Trust */}
                    <div className="bg-white p-4 rounded-xl shadow-md text-xs sm:col-span-2 text-navy-blue text-center">
                        Trusted by 5,000+ Applicants. 98% Client Satisfaction
                    </div>
                </div>

                {/* Right Column: SVG Illustration */}
                <div className="">
                    <MyImage
                        src={Illustration}
                        alt="Visa Calculator Illustration"
                        className="max-w-[280px] mx-auto"
                    />
                </div>
            </div>

            {/* Bottom Section: Testimonials */}
            <div className="container-1200">
                <h2 className="text-center text-navy-blue text-2xl font-semibold mb-8">
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
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-navy-blue mb-4 leading-snug">
                                Landing My Dream Job In Australia – Stress-Free!
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                MigrateGlobe made the entire visa process
                                crystal clear. I used their visa points
                                calculator and instantly knew I was eligible for
                                Subclass 189. Their team helped fine-tune my
                                documentation and guided me through every
                                government touchpoint. Today, I'm living and
                                working in Sydney as a Data Analyst — all thanks
                                to them!
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
        </section>
    );
};

export default VisaCalculatorSection;
