import ContactForm from "@/components/contact-us/ContactForm";
import FaqsSection from "@/components/contact-us/FaqsSection";
import MapSection from "@/components/contact-us/MapSection";

export default function Contact() {
    // const res = await fetch(
    //     "http://localhost:1337/api/contact-us?populate=*",
    //     {
    //         next: { revalidate: 86400 }, // 24 hours
    //     }
    // );

    // const json = await res.json();
    // const contactUs = json.data;

    return (
        <div className="container-1200">
            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row gap-10">
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
