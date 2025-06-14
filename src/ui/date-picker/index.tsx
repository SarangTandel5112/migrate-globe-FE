import { ChangeEvent, InputHTMLAttributes } from "react";

// Define the variant and size types
type DatePickerVariant = "default" | "minimal" | "dark" | "gradient" | "pill";
type DatePickerSize = "sm" | "md" | "lg";

// Define the props interface
interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'size'> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  min?: string;
  max?: string;
  variant?: DatePickerVariant;
  size?: DatePickerSize;
  className?: string;
}

// Common DatePicker Component
const CustomDatePicker: React.FC<DatePickerProps> = ({ 
  value = "",
  onChange,
  placeholder = "Select date",
  label = "",
  error = "",
  disabled = false,
  required = false,
  min = "",
  max = "",
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses = "w-full transition-all duration-200 bg-white shadow-sm hover:shadow-md focus:outline-none";
  
  // Size variants
  const sizeClasses: Record<DatePickerSize, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg"
  };

  // Style variants
  const variantClasses: Record<DatePickerVariant, string> = {
    default: "border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
    minimal: "border-0 border-b-2 border-gray-300 rounded-none focus:border-gray-800 focus:ring-0 bg-transparent",
    dark: "bg-gray-800 text-white border-2 border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200",
    gradient: "bg-gradient-to-r from-pink-50 to-blue-50 border-2 border-transparent rounded-xl focus:ring-4 focus:ring-pink-100",
    pill: "bg-gray-100 border-0 rounded-full focus:bg-white focus:ring-4 focus:ring-green-200 focus:shadow-lg"
  };

  // Calendar icon styling
  const iconClasses: Record<string, string> = {
    default: "[&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
    dark: "[&::-webkit-calendar-picker-indicator]:filter:invert(1)",
    minimal: "[&::-webkit-calendar-picker-indicator]:opacity-70"
  };

  // Error state classes
  const errorClasses = error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "";
  
  // Disabled state classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : "";

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${iconClasses[variant] || iconClasses.default}
    ${errorClasses}
    ${disabledClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        type="date"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        className={combinedClasses}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default CustomDatePicker;