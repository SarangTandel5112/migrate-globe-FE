const VideoIcon = ({
    color = 'silver',
    width = 18,
    height = 18,
    ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & {
    width?: number;
    height?: number;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="m11.25 7.5 3.415-1.707a.75.75 0 0 1 1.085.67v5.074a.75.75 0 0 1-1.085.67L11.25 10.5v-3Z"
            clipRule="evenodd"
        />
        <rect
            width={width / 2}
            height={height / 2}
            x={2.25}
            y={4.5}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            rx={2}
        />
    </svg>
);
export default VideoIcon;
