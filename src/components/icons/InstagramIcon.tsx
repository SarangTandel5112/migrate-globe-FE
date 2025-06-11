const InstagramIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={21}
        fill="none"
        {...props}
    >
        <rect
            width={13.333}
            height={13.333}
            x={3.333}
            y={3.568}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            rx={4}
        />
        <circle
            cx={10}
            cy={10.234}
            r={2.5}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
        />
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M13.75 6.484v.001"
        />
    </svg>
);
export default InstagramIcon;
