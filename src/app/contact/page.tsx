"use client";

import ContactForm from "@/components/contact-us/ContactForm";
import FaqsSection from "@/components/contact-us/FaqsSection";
import MapSection from "@/components/contact-us/MapSection";

export default function Contact() {
    return (
        <div className="container-1200">
            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row">
                {/* Left Section - Map and Locations */}
                <MapSection />

                {/* Right Section - Contact Form */}
                <ContactForm />
            </div>

            {/* FAQ Section */}
            <FaqsSection />
        </div>
    );
}
