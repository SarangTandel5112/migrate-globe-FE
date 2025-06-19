const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <circle
            cx={8.995}
            cy={9}
            r={1.429}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.286}
            d="M16.141 9c-1.905 3.334-4.285 5-7.143 5-2.857 0-5.238-1.666-7.143-5C3.76 5.666 6.141 4 8.998 4s5.238 1.666 7.143 5"
        />
    </svg>
);
export default EyeIcon;
