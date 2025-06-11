import VisaDetail from "@/components/visa/VisaDetails";
import VisaTypeCard from "@/components/visa/VisaTypeCard";

const visaTypes = [
    {
        title: "Student Visa (Subclass 500)",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        active: true,
    },
    {
        title: "Student Guardian Visa (Subclass 590)",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        active: false,
    },
];

function page() {
    return (
        <div className="container-1200">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex justify-between items-start">
                    <h1 className="text-heading1 text-navy-blue">
                        Student Visa
                    </h1>
                    <button className="bg-navy-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                        Book a Consultation
                    </button>
                </div>
                <div className="border-b border-[#DEE2E5]"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visaTypes.map((type, index) => (
                        <VisaTypeCard key={index} type={type} />
                    ))}
                </div>
                <h3 className="text-heading1 text-navy-blue">
                    Student Visa (Subclass 500)
                </h3>
                <VisaDetail />
            </div>
        </div>
    );
}

export default page;
