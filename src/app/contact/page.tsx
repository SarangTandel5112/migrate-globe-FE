import ContactForm from "@/components/contact-us/ContactForm";
import FaqsSection from "@/components/contact-us/FaqsSection";
import MapSection from "@/components/contact-us/MapSection";
import { ContactUs } from "@/utils/interface";


// Uncomment below to use live API
export default async function Contact() {
    const res = await fetch(
        "https://admin.migrateglobe.com/api/contact-us?populate[email]=*&populate[phone]=*&populate[location]=*&populate[faqs]=*",
    );
    const apiData = await res.json();
    const contact = Array.isArray(apiData.data) ? apiData.data[0] : apiData.data;
    const contactUs: ContactUs = {
        id: contact.id,
        documentId: contact.documentId || "",
        name: contact.name || "",
        description: contact.description || null,
        createdAt: contact.createdAt || "",
        updatedAt: contact.updatedAt || "",
        publishedAt: contact.publishedAt || "",
        email: contact.email || [],
        phone: contact.phone || [],
        location: contact.location || [],
        faqs: contact.faqs || [],
    };

    const mapWidth = 600;
    const mapHeight = 320;

    const locationsWithXY = contact?.location?.map((loc: Location, index : number) => {
        const xPositions = [0.83, 0.70, 0.67, 0.69, 0.68];
        const yPositions = [0.73, 0.37, 0.40, 0.38, 0.38];
        const x = xPositions[index] * mapWidth;
        const y = yPositions[index] * mapHeight;
        return { ...loc, x, y };
    });
    

    return (
        <div className="container-1200">
            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Section - Map and Locations */}
                {/* <MapSection locations={contactUs.location} phones={contactUs.phone} emails={contactUs.email} /> */}
                <MapSection locations={locationsWithXY} phones={contactUs.phone} emails={contactUs.email} />

                {/* Right Section - Contact Form */}
                <ContactForm />
            </div>

            {/* FAQ Section */}
            <FaqsSection faqs={contactUs.faqs} />
        </div>
    );
}

// Use static sample for local development
// export default function Contact() {
//     const contactUsSample: ContactUs = {
//         id: 3,
//         documentId: "mlkw1uuut7qfswuuuves652i",
//         name: "Contact Us",
//         description: null,
//         createdAt: "2025-06-27T16:55:45.244Z",
//         updatedAt: "2025-06-27T16:57:57.377Z",
//         publishedAt: "2025-06-27T16:57:57.397Z",
//         email: [
//             { id: 3, name: "visa", email: "visas@studyglobe.au" },
//         ],
//         phone: [
//             { id: 5, name: "Krunal", number: "+61 282136300" },
//             { id: 6, name: "Manek", number: "+61 282136300" },
//         ],
//         location: [
//             { id: 11, name: "Australia", address: "Suite 15, 11 Ada St, Harris Park, NSW 2150", lat: 1, lon: 1 },
//             { id: 12, name: "New Delhi", address: "C8/1, 2nd Floor, Rohini Sector 7, Rohini East Metro Station, New Delhi-110085", lat: 1, lon: 1 },
//             { id: 13, name: "Rajasthan", address: "Sri Ganga Nagar - 63, near PNB Bank, P Block, Sri Ganganagar, Rajasthan 335001, India", lat: 1, lon: 1 },
//             { id: 14, name: "Haryana", address: "Sirsa - Study Globe, Barnala Rd, near Welcome Palace, Sirsa, Haryana 125055, India", lat: 1, lon: 1 },
//             { id: 15, name: "Haryana", address: "Hisar - SHOPPING COMPLEX, SCO 83, 2ND FLOOR, near Jain Jewellers, PLA, Hisar, Haryana 125001, India", lat: 1, lon: 1 },
//         ],
//         faqs: [
//             {
//                 id: 2,
//                 documentId: "zl7a8g1ok6yn3xae8zy4ztsh",
//                 question: "What is MigrateGlobe?",
//                 answer: "MigrateGlobe is a comprehensive visa and immigration platform offering expert guidance for students, workers, and travelers across multiple destinations.",
//                 createdAt: "2025-06-27T16:48:48.829Z",
//                 updatedAt: "2025-06-27T16:48:48.829Z",
//                 publishedAt: "2025-06-27T16:48:48.843Z",
//                 sortOrder: 1,
//             },
//             {
//                 id: 6,
//                 documentId: "fajov0z4nzjd282e5z4kjsn9",
//                 question: "What are the types of visas I can apply for?",
//                 answer: "We help with Student Visas, Work Visas, Business Visas, Family Visas, and specialized visas like Global Talent visas.",
//                 createdAt: "2025-06-27T16:49:30.115Z",
//                 updatedAt: "2025-06-27T16:49:30.115Z",
//                 publishedAt: "2025-06-27T16:49:30.121Z",
//                 sortOrder: 3,
//             },
//             {
//                 id: 10,
//                 documentId: "z92dukatwcm7vqiopkx24rt9",
//                 question: "Can MigrateGlobe help me with SOPs, LORs, and resume writing?",
//                 answer: "Yes, we provide support for crafting Statements of Purpose, Letters of Recommendation, and professional resumes to strengthen your application.",
//                 createdAt: "2025-06-27T16:50:17.228Z",
//                 updatedAt: "2025-06-27T16:50:17.228Z",
//                 publishedAt: "2025-06-27T16:50:17.232Z",
//                 sortOrder: 5,
//             },
//             {
//                 id: 4,
//                 documentId: "ezg3oz3jcbz66fmz9vwy1ka5",
//                 question: "Is visa consultation with MigrateGlobe free?",
//                 answer: "Our initial consultation is completely free. You'll only pay for advanced services like documentation support or premium processing packages.",
//                 createdAt: "2025-06-27T16:49:11.152Z",
//                 updatedAt: "2025-06-27T16:49:11.152Z",
//                 publishedAt: "2025-06-27T16:49:11.158Z",
//                 sortOrder: 2,
//             },
//             {
//                 id: 8,
//                 documentId: "w4qp4ljm5qqd7lhzngo26hqj",
//                 question: "How long does the visa process usually take?",
//                 answer: "Visa processing times vary based on the country and type, ranging typically from 2 weeks to several months depending on the complexity.",
//                 createdAt: "2025-06-27T16:49:49.094Z",
//                 updatedAt: "2025-06-27T16:49:49.094Z",
//                 publishedAt: "2025-06-27T16:49:49.100Z",
//                 sortOrder: 4,
//             },
//         ],
//     };

//     return (
//         <div className="container-1200">
//             {/* Contact Section */}
//             <div className="flex flex-col lg:flex-row gap-10">
//                 {/* Left Section - Map and Locations */}
//                 <MapSection locations={contactUsSample.location} phones={contactUsSample.phone} emails={contactUsSample.email} />

//                 {/* Right Section - Contact Form */}
//                 <ContactForm />
//             </div>

//             {/* FAQ Section */}
//             <FaqsSection faqs={contactUsSample.faqs} />
//         </div>
//     );
// }
