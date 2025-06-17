const TabButton = ({ id, label, icon, isActive, onClick }: any) => (
    <button
        onClick={() => onClick(id)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-md  font-bold text-base tracking-wide transition-all ${
            isActive
                ? "bg-navy-blue text-white"
                : "text-neutrals-300 hover:text-neutrals-500"
        }`}
    >
        {icon}
        {label}
    </button>
);

export default TabButton;
