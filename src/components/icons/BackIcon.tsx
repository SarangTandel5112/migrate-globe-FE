const BackIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={17}
        fill="none"
        {...props}
    >
        <path
            stroke="#263773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M8 13.167 3.333 8.5 8 3.833M12.667 8.5H3.333"
        />
    </svg>
);
export default BackIcon;
