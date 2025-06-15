const CalenderIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <rect
            width={13.333}
            height={13.333}
            x={3.332}
            y={4.167}
            stroke="#696969"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            rx={2}
        />
        <path
            stroke="#696969"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M13.335 2.5v3.333M6.667 2.5v3.333M3.332 9.167h13.333M9.168 12.5h.833M9.999 12.5V15"
        />
    </svg>
);
export default CalenderIcon;
