import ArrowDownIcon from "../icons/ArrowDown";
import BreifCaseIcon from "../icons/BreifCaseIcon";

interface InputFieldProps {
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    onChange?: () => void;
}

const InputField = ({
    label,
    value,
    placeholder,
    type = "text",
    className = "",
    onChange,
    ...props
}: InputFieldProps) => (
    <div className="flex flex-col gap-2">
        <label className=" font-semibold text-sm text-neutrals capitalize tracking-wide">
            {label}
        </label>
        {type === "phone" ? (
            <div className="flex gap-1">
                <div className="flex items-center gap-2 px-3 py-2.5 border border-neutrals-200 bg-background-1 rounded">
                    <div className="w-3.5 h-3.5 bg-orange-500 rounded-sm"></div>
                    <span className=" text-sm text-neutrals-700">+91</span>
                    <ArrowDownIcon className="text-navy-blue-300" />
                </div>
                <input
                    type="text"
                    placeholder="123 456 7890"
                    className="flex-1 px-4 py-2.5 border border-neutrals-200 bg-background-1 rounded  text-base text-neutrals-300 font-semibold placeholder:text-neutrals-300"
                    onChange={onChange}
                    {...props}
                />
            </div>
        ) : (
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                className={`px-3 py-2.5 border border-neutrals-200 bg-background-1 rounded  text-base text-neutrals-700 placeholder:text-neutrals-700 ${className}`}
                onChange={onChange}
                {...props}
            />
        )}
    </div>
);

export default InputField;
