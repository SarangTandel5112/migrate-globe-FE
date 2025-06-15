import BreifCaseIcon from "../icons/BreifCaseIcon";

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

const ActionButton = ({ icon, className = "bg-navy-blue-500" }: any) => (
    <button
        className={`p-1 rounded ${className} text-white hover:opacity-90 transition-opacity`}
    >
        {icon}
    </button>
);

function ConsultationTab() {
    return (
        <div>
            <h2 className=" font-bold text-2xl text-neutrals-700 capitalize mb-6">
                Consultation
            </h2>
            <div className="space-y-6">
                {consultations.map(
                    (
                        { title, description, consultant, date, iconType },
                        index
                    ) => (
                        <div className="bg-background-1 rounded px-3 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    {iconType === "video" ? (
                                        <BreifCaseIcon className="w-6 h-6 text-navy-blue-500" />
                                    ) : (
                                        <BreifCaseIcon className="w-6 h-6 text-navy-blue-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className=" font-bold text-sm text-neutrals-700 leading-tight mb-1">
                                        {title}
                                    </h3>
                                    <p className=" text-xs text-neutrals-500 leading-normal max-w-80">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-20">
                                <div className="text-right">
                                    <p className=" font-bold text-sm text-neutrals-700 leading-tight">
                                        {consultant}
                                    </p>
                                    <p className=" text-xs text-neutrals-500">
                                        {date}
                                    </p>
                                </div>
                                <div className="flex gap-6">
                                    <ActionButton
                                        icon={
                                            <BreifCaseIcon className="w-5 h-5" />
                                        }
                                    />
                                    <ActionButton
                                        icon={
                                            <BreifCaseIcon className="w-5 h-5" />
                                        }
                                    />
                                    <ActionButton
                                        icon={
                                            <BreifCaseIcon className="w-5 h-5" />
                                        }
                                    />
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
