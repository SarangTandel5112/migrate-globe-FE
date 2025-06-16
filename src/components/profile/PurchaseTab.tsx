import DownloadIcon from "../icons/DownloadIcon";
import EyeIcon from "../icons/EyeIcon";
import FileIcon from "../icons/FileIcon";
import FileInvoiceIcon from "../icons/FileInvoice";

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

const ActionButton = ({ icon, className = "bg-navy-blue" }: any) => (
    <button
        className={`p-1 rounded ${className} text-white hover:opacity-90 transition-opacity`}
    >
        {icon}
    </button>
);

function PurchaseTab() {
    return (
        <div>
            <h2 className="font-bold text-heading1 text-neutrals-700 capitalize mb-6">
                My Purchase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map(({ title, date }: any) => (
                    <div className="bg-background-1 rounded-lg p-4 flex gap-4">
                        <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 bg-mint-green-50 rounded-full flex items-center justify-center">
                                <FileIcon className="text-navy-blue-500" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className=" font-semibold text-base text-neutrals-700 mb-1 leading-tight">
                                {title}
                            </h3>
                            <p className=" text-sm text-neutrals mb-4">
                                {date}
                            </p>
                            <div className="flex gap-6">
                                <div className="flex gap-6">
                                    <ActionButton icon={<EyeIcon />} />
                                    <ActionButton icon={<FileInvoiceIcon />} />
                                    <ActionButton icon={<DownloadIcon />} />
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
