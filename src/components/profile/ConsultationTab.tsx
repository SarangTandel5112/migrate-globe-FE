import DownloadIcon from "../icons/DownloadIcon";
import EyeIcon from "../icons/EyeIcon";
import FileInvoiceIcon from "../icons/FileInvoice";
import VideoLargeIcon from "../icons/VideoLargeIcon";

const consultations = [
    {
        title: "Onboarding - Completed",
        description:
            "Lorem ipsum dolor sit amet consectetur. Velit facilisi quis pharetra varius augue morbi quisque.",
        consultant: "Anil Mishra",
        date: "21 Jun 2021 15:36",
        iconType: "video",
    },
    {
        title: "Onboarding - Completed",
        description:
            "Lorem ipsum dolor sit amet consectetur. Velit facilisi quis pharetra varius augue morbi quisque.",
        consultant: "Anil Mishra",
        date: "21 Jun 2021 15:36",
        iconType: "user",
    },
    {
        title: "Onboarding - Completed",
        description:
            "Lorem ipsum dolor sit amet consectetur. Velit facilisi quis pharetra varius augue morbi quisque.",
        consultant: "Anil Mishra",
        date: "21 Jun 2021 15:36",
        iconType: "video",
    },
    {
        title: "Onboarding - Completed",
        description:
            "Lorem ipsum dolor sit amet consectetur. Velit facilisi quis pharetra varius augue morbi quisque.",
        consultant: "Anil Mishra",
        date: "21 Jun 2021 15:36",
        iconType: "video",
    },
    {
        title: "Onboarding - Completed",
        description:
            "Lorem ipsum dolor sit amet consectetur. Velit facilisi quis pharetra varius augue morbi quisque.",
        consultant: "Anil Mishra",
        date: "21 Jun 2021 15:36",
        iconType: "video",
    },
];

const ActionButton = ({
    icon,
    className = "bg-navy-blue h-[26px] w-[26px]",
}: any) => (
    <button
        className={`p-1 rounded ${className} text-white hover:opacity-90 transition-opacity`}
    >
        {icon}
    </button>
);

function ConsultationTab() {
    return (
        <div>
            <h2 className=" font-bold text-heading1 text-neutrals-700 capitalize mb-6">
                Consultation
            </h2>
            <div className="space-y-6">
                {consultations.map(
                    (
                        { title, description, consultant, date, iconType },
                        index
                    ) => (
                        <div
                            key={index}
                            className="bg-background-1 rounded px-3 py-3 flex gap-5 flex-col md:flex-row items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    {iconType === "video" ? (
                                        <VideoLargeIcon className="w-6 h-6 text-navy-blue-500" />
                                    ) : (
                                        <VideoLargeIcon className="w-6 h-6 text-navy-blue-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className=" font-bold text-base text-neutrals-700 leading-tight mb-1">
                                        {title}
                                    </h3>
                                    <p className=" text-sm text-neutrals leading-normal max-w-80">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-20 hidden md:block">
                                <div className="text-right">
                                    <p className=" font-bold text-base text-neutrals-700 leading-tight">
                                        {consultant}
                                    </p>
                                    <p className=" text-sm text-neutrals">
                                        {date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 hidden md:flex">
                                <ActionButton icon={<EyeIcon />} />
                                <ActionButton icon={<FileInvoiceIcon />} />
                                <ActionButton icon={<DownloadIcon />} />
                            </div>

                            <div className="flex gap-5">
                                <div className="flex items-center gap-20 block md:hidden">
                                    <div className="">
                                        <p className=" font-bold text-base text-neutrals-700 leading-tight">
                                            {consultant}
                                        </p>
                                        <p className=" text-sm text-neutrals">
                                            {date}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6 block md:hidden">
                                    <ActionButton icon={<EyeIcon />} />
                                    <ActionButton icon={<FileInvoiceIcon />} />
                                    <ActionButton icon={<DownloadIcon />} />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ConsultationTab;
