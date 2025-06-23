"use client";
import MyImage from "@/ui/myImage";
import Illustration from "@assets/images/visa_calculator.svg";
import { motion, easeOut } from "framer-motion";
import { useRouter } from "next/navigation";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: easeOut,
        },
    },
};

const VisaCalculatorSection = () => {
    const router = useRouter();

    return (
        <motion.section
            className="container-1200"
            initial="hidden"
            // initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-10 items-center">
                {/* Left Column: Text & CTA */}
                <motion.div
                    variants={itemVariants}
                    className="text-navy-blue flex gap-3 flex-col-reverse sm:flex-row"
                >
                    <div>
                        <h2 className="text-heading-large font-bold mb-4">
                            Visa Calculator
                        </h2>
                        <p className="text-description1 leading-relaxed mb-6">
                            Use our free points calculator to check your
                            eligibility under Subclass 189, 190, or 491 visas.
                            Find out if you&apos;re eligible for Australian PR.
                        </p>
                        <motion.button
                            onClick={() =>
                                router.push("/visa-points-calculator")
                            }
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full sm:w-auto bg-navy-blue text-white px-6 py-2 rounded-md text-sm hover:bg-[#1f2e59] transition"
                        >
                            Start Calculator
                        </motion.button>
                    </div>
                    <div className="block lg:hidden">
                        <motion.div
                            variants={itemVariants}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <MyImage
                                src={Illustration}
                                alt="Visa Calculator Illustration"
                                className="max-w-[280px] mx-auto"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Middle Column: Grid of Cards */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-2 gap-4"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md text-navy-blue text-sm"
                    >
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
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md text-navy-blue text-sm"
                    >
                        <h3 className="font-semibold text-heading1 mb-6">
                            Who Is It For?
                        </h3>
                        <ul className="space-y-2">
                            <li>🎓 Recent Graduates</li>
                            <li>💼 Skilled Professionals</li>
                            <li>👨‍👩‍👧 Families Planning Migration</li>
                        </ul>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-4 rounded-xl shadow-md text-xs col-span-2 text-navy-blue text-center"
                    >
                        Trusted by 5,000+ Applicants. 98% Client Satisfaction
                    </motion.div>
                </motion.div>

                {/* Right Column: Illustration */}
                <motion.div
                    variants={itemVariants}
                    className="hidden lg:block"
                    transition={{ delay: 0.1 }}
                >
                    <MyImage
                        src={Illustration}
                        alt="Visa Calculator Illustration"
                        className="max-w-[280px] mx-auto"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default VisaCalculatorSection;
