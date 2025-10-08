import Image from "next/image";
// import CheckList from "@assets/images/checklist.png";

const requirements = [
    "Valid Passport",
    "Passport-sized Photographs",
    "Proof of Travel Arrangements",
    "Proof of Accommodation",
    "Financial Means",
    "Travel Insurance",
    "Proof of Employment or Income",
    "Purpose of Visit",
];

// const services = [
//     {
//         icon: CheckList,
//         title: "Buy Cheapest Insurance",
//         desc: "Compare And Purchase Affordable Overseas Health Cover From Top",
//     },
//     {
//         icon: CheckList,
//         title: "Buy Documents Checklists",
//         desc: "Get A Verified Checklist Tailored To Your Visa And Occupation. No",
//     },
//     {
//         icon: CheckList,
//         title: "Zoom Consultations",
//         desc: "Get Expert Advice Face-To-Face — Online. Book A Call With Our",
//     },
// ];

// Add props for title, description, and image
interface VisaDetailProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function VisaDetail({
    title,
    description,
    image,
}: VisaDetailProps) {
    return (
        <section>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
                <Image
                    src={image || "/visa.png"} // Use prop or default
                    alt={title || "Student Visa"}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-auto"
                />

                <div>
                    <h2 className="text-navy-blue text-heading1 mb-3">
                        {title || "Description"}
                    </h2>
                    <div className="space-y-4 text-navy-blue-400 text-description1">
                        {description ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                                className="prose prose-sm max-w-none"
                            />
                        ) : (
                            <p>
                                Dignissim Mi Ac Luctus Ultrices Enim Nulla
                                Volutpat Aliquam. Quis Egestas Egestas Ornare
                                Molestie Dignissim Morbi Euismod. Proin Aliquet
                                Mollis Ultricies Mauris Urna Elit Tincidunt
                                Bibendum. Nam Et Nunc Adipiscing Etiam Tellus.
                            </p>
                        )}
                    </div>

                    <h2 className="text-navy-blue text-heading1 mt-6 mb-3">
                        Requirements
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-y-2 text-navy-blue-400 text-description1 list-disc list-inside">
                        {requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
