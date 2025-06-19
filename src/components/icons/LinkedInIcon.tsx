const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            rx={2}
        />
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M6.667 9.401v4.167M6.667 6.901v.008M10 13.568V9.4M13.333 13.568v-2.5a1.667 1.667 0 1 0-3.333 0"
        />
    </svg>
);
export default LinkedInIcon;
