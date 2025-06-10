import Image from "next/image";

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

const services = [
    {
        icon: "/icons/insurance.svg",
        title: "Buy Cheapest Insurance",
        desc: "Compare And Purchase Affordable Overseas Health Cover From Top",
    },
    {
        icon: "/icons/checklist.svg",
        title: "Buy Documents Checklists",
        desc: "Get A Verified Checklist Tailored To Your Visa And Occupation. No",
    },
    {
        icon: "/icons/consultation.svg",
        title: "Zoom Consultations",
        desc: "Get Expert Advice Face-To-Face — Online. Book A Call With Our",
    },
];

export default function VisaDetail() {
    return (
        <section>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
                <Image
                    src="/visa.png" // Replace with your actual path
                    alt="Student Visa"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-auto"
                />

                <div>
                    <h2 className="text-navy-blue text-heading1 mb-3">
                        Description
                    </h2>
                    <div className="space-y-4 text-navy-blue-400 text-description1">
                        <p>
                            Dignissim Mi Ac Luctus Ultrices Enim Nulla Volutpat
                            Aliquam. Quis Egestas Egestas Ornare Molestie
                            Dignissim Morbi Euismod. Proin Aliquet Mollis
                            Ultricies Mauris Urna Elit Tincidunt Bibendum. Nam
                            Et Nunc Adipiscing Etiam Tellus.
                        </p>
                        <p>
                            Commodo Vel Non Malesuada Nulla Sapien Odio In
                            Viverra. Amet Integer Ullamcorper Morbi Phasellus
                            Sed Tellus. Ultricies Nisl Enim Nec Felis Adipiscing
                            Enim Ac Et Risus. Porttitor Dui Nunc Duis Morbi Ac.
                            Fames Vel Tellus Accumsan Lacinia Nulla Duis Amet
                            Hac Eget.
                        </p>
                        <p>
                            Commodo Vel Non Malesuada Nulla Sapien Odio In
                            Viverra. Amet Integer Ullamcorper Morbi Phasellus
                            Sed Tellus. Ultricies Nisl Enim Nec Felis Adipiscing
                            Enim Ac Et Risus. Porttitor Dui Nunc Duis Morbi Ac.
                            Fames Vel Tellus Accumsan Lacinia Nulla Duis Amet
                            Hac Eget.
                        </p>
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

            <div className="grid md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
                    >
                        <div className="mb-3">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={32}
                                height={32}
                            />
                        </div>
                        <h4 className="font-semibold text-navyBlue-600 mb-1">
                            {service.title}
                        </h4>
                        <p className="text-sm text-neutrals-500">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
