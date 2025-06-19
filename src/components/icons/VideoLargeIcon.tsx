const VideoLargeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#263773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4Z"
            clipRule="evenodd"
        />
        <rect
            width={12}
            height={12}
            x={3}
            y={6}
            stroke="#263773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            rx={2}
        />
    </svg>
);
export default VideoLargeIcon;
