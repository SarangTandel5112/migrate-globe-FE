const BreifCaseIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <rect
            width={18}
            height={13}
            x={3}
            y={7}
            stroke="#7D87AB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            rx={2}
        />
        <path
            stroke="#7D87AB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 12v.01M3 13a20 20 0 0 0 18 0"
        />
    </svg>
);
export default BreifCaseIcon;
