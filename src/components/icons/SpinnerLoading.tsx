const SpinnerLoadingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        className="w-5 h-5 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            className="opacity-75"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M4 12a8 8 0 1 1 16 0"
        />
    </svg>
);
export default SpinnerLoadingIcon;
