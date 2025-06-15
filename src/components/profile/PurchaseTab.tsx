const documents = [
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
    {
        title: "Subclass 858 (Global Talent Visa - Permanent) Check List",
        date: "21 Jun 2021 15:36",
    },
];

const ActionButton = ({ icon, className = "bg-navy-blue-500" }: any) => (
    <button
        className={`p-1 rounded ${className} text-white hover:opacity-90 transition-opacity`}
    >
        {icon}
    </button>
);

function PurchaseTab() {
    return (
        <div>
            <h2 className=" font-bold text-2xl text-neutrals-700 capitalize mb-6">
                My Purchase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map(({ title, date }: any) => (
                    <div className="bg-background-1 rounded-lg p-4 flex gap-4">
                        <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 bg-mint-green-50 rounded-full flex items-center justify-center">
                                {/* <FileText className="w-6 h-6 text-navy-blue-500" /> */}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className=" font-semibold text-sm text-neutrals-700 mb-1 leading-tight">
                                {title}
                            </h3>
                            <p className=" text-xs text-neutrals-500 mb-4">
                                {date}
                            </p>
                            <div className="flex gap-6">
                                <div className="flex gap-6">
                                    {/* <ActionButton icon={<Eye className="w-4 h-4" />} />
                        <ActionButton icon={<FileText className="w-4 h-4" />} />
                        <ActionButton icon={<Download className="w-4 h-4" />} /> */}

                                    <ActionButton />
                                    <ActionButton />
                                    <ActionButton />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PurchaseTab;
