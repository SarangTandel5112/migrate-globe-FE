import MyImage from "@/ui/myImage";
import Illustration from '@assets/images/Illustration.svg'

const VisaCalculatorSection = () => {
    return (
        <section className="bg-background-1 py-12 px-4 lg:px-0">
            {/* Top Section: Visa Calculator */}
            <div className="container-1200 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-10 py-16 items-center">
                {/* Left Column: Text & CTA */}
                <div className="text-[#263773]">
                    <h2 className="text-3xl font-semibold mb-4">Visa Calculator</h2>
                    <p className="text-sm leading-relaxed mb-6">
                        Use our free points calculator to check your eligibility under Subclass 189, 190, or 491 visas.
                        Find out if you're eligible for Australian PR.
                    </p>
                    <button className="bg-[#263773] text-white px-6 py-2 rounded-md text-sm hover:bg-[#1f2e59] transition">
                        Start Calculator
                    </button>
                </div>

                {/* Middle Column: Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 - How It Works */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-[#263773] text-sm">
                        <h3 className="font-semibold mb-3">How It Works</h3>
                        <ul className="space-y-2">
                            <li><strong>Step 1:</strong> Choose Your Visa Subclass</li>
                            <li><strong>Step 2:</strong> Answer 10 Simple Questions</li>
                            <li><strong>Step 3:</strong> Get Your Estimated Points Instantly</li>
                        </ul>
                    </div>

                    {/* Card 2 - Who Is It For */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-[#263773] text-sm">
                        <h3 className="font-semibold mb-3">Who Is It For?</h3>
                        <ul className="space-y-2">
                            <li>🎓 Recent Graduates</li>
                            <li>💼 Skilled Professionals</li>
                            <li>👨‍👩‍👧 Families Planning Migration</li>
                        </ul>
                    </div>

                    {/* Card 3 - Testimonials/Trust */}
                    <div className="bg-white p-4 rounded-xl shadow-md text-xs sm:col-span-2 text-[#263773] text-center">
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
                <h2 className="text-center text-[#263773] text-2xl font-semibold mb-8">What Our Clients Says</h2>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    {/* Left: Client Image + Label */}
                    <div className="w-full md:w-1/3 flex flex-col items-center bg-[#FADADA] rounded-xl p-4">
                        <img
                            src="/rahul-mehra.png"
                            alt="Rahul Mehra"
                            className="rounded-xl w-full object-cover"
                        />
                        <div className="bg-white px-3 py-1 rounded-md text-sm mt-3 text-[#263773] text-center shadow">
                            Rahul Mehra<br />
                            Skilled Independent Visa – Subclass 189
                        </div>
                    </div>

                    {/* Right: Testimonial Text */}
                    <div className="flex flex-col">
                        <div className="flex-1 text-left">
                            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">//Success Stories</p>
                            <h3 className="text-xl font-semibold text-[#263773] mb-4 leading-snug">
                                Landing My Dream Job In Australia – Stress-Free!
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                MigrateGlobe made the entire visa process crystal clear. I used their visa points calculator and instantly knew I was eligible for Subclass 189.
                                Their team helped fine-tune my documentation and guided me through every government touchpoint. Today, I'm living and working in Sydney as a Data Analyst — all thanks to them!
                            </p>
                        </div>

                        {/* Arrows */}
                        <div className="flex justify-end space-x-2 mt-4 md:mt-0">
                            <button className="bg-[#263773] text-white p-2 rounded-full hover:bg-[#1e2e5e]">
                                ◀
                            </button>
                            <button className="bg-[#263773] text-white p-2 rounded-full hover:bg-[#1e2e5e]">
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaCalculatorSection;
