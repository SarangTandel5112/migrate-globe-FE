const TicketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            stroke="silver"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M11.25 3.75v1.5M11.25 8.25v1.5M11.25 12.75v1.5M3.75 3.75h10.5a1.5 1.5 0 0 1 1.5 1.5V7.5a1.5 1.5 0 0 0 0 3v2.25a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V10.5a1.5 1.5 0 1 0 0-3V5.25a1.5 1.5 0 0 1 1.5-1.5"
        />
    </svg>
);
export default TicketIcon;
