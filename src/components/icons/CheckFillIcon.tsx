const CheckFillIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <rect width={24} height={24} fill="#6FAC96" rx={12} />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Z"
            />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m9 12 2 2 4-4"
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={24} height={24} fill="#fff" rx={12} />
            </clipPath>
        </defs>
    </svg>
);
export default CheckFillIcon;
