"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyImage from "@/ui/myImage";
import { containerVariants } from "@/utils/animation-variant";
import { TestimonialsProps } from "@/utils/interface";
import { parseMarkdownTitle } from "@/utils/richTextParser";

function Testimonials({ testimonial }: TestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = testimonial.testimonials;
    const currentTestimonial = testimonials[currentIndex];
    
    // Navigation functions
    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };
    
    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    // Animation variants for testimonial content
    const slideVariants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };
    
    const [direction, setDirection] = useState(0);
    return (
        <motion.div
            className="container-1200"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-center text-navy-blue text-heading-large font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {parseMarkdownTitle(testimonial.intro.title)}
            </motion.h2>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="w-full flex flex-col md:flex-row gap-6"
                    >
                        {/* Left: Client Image + Label */}
                        <div className="w-full md:w-[360px] flex-shrink-0 relative">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                <MyImage
                                    src={`https://admin.migrateglobe.com${currentTestimonial.clientImage.url}`}
                                    alt={currentTestimonial.clientName}
                                    width={360}
                                    height={270}
                                    className="object-cover w-full h-full"
                                />

                                <div className="absolute left-4 bottom-4 bg-white px-3 py-1 rounded-md text-xs text-navy-blue text-left shadow">
                                    {currentTestimonial.clientName}
                                    <br />
                                    {currentTestimonial.clientService}
                                </div>
                            </div>
                        </div>

                        {/* Right: Text & Arrows */}
                        <div className="flex flex-col text-left justify-between w-full">
                            <div>
                                <h3 className="text-heading-large2 font-semibold text-navy-blue mb-4 leading-snug">
                                    {parseMarkdownTitle(currentTestimonial.title)}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {currentTestimonial.clientReview}
                                </p>
                            </div>

                            {/* Bottom Arrows */}
                            <div className="flex justify-end gap-3 mt-6">
                                <motion.button 
                                    onClick={goToPrevious}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        testimonials.length === 1 
                                            ? 'bg-gray-200 cursor-not-allowed' 
                                            : 'bg-[#f0f1f7] hover:bg-[#e5e7eb]'
                                    }`}
                                    disabled={testimonials.length === 1}
                                >
                                    <svg 
                                        width="12" 
                                        height="12" 
                                        viewBox="0 0 9 14" 
                                        fill="none" 
                                        className="rotate-180"
                                    >
                                        <path 
                                            d="M1.5 13L7.5 7L1.5 1" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.button>
                                <motion.button 
                                    onClick={goToNext}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        testimonials.length === 1 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-navy-blue hover:bg-[#1f2e59] text-white'
                                    }`}
                                    disabled={testimonials.length === 1}
                                >
                                    <svg 
                                        width="12" 
                                        height="12" 
                                        viewBox="0 0 9 14" 
                                        fill="none"
                                    >
                                        <path 
                                            d="M1.5 13L7.5 7L1.5 1" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                
                {/* Testimonial Indicators */}
                {testimonials.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-navy-blue' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Testimonials;
