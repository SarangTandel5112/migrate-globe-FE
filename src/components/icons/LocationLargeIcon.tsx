const LocationLargeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#BEC3D5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1h-6ZM18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2M18 22v-3"
        />
        <path
            stroke="#BEC3D5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
    </svg>
);
export default LocationLargeIcon;
