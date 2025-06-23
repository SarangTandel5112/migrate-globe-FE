interface TabButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (id: string) => void;
}
const TabButton = ({ id, label, icon, isActive, onClick }: TabButtonProps) => (
    <button
        onClick={() => onClick(id)}
        className={`flex items-center gap-2 md:gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-md font-bold text-xs md:text-base text-nowrap tracking-wide transition-all ${
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
