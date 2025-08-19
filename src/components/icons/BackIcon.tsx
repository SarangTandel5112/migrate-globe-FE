const BackIcon = ({ width = 16, height = 17, fill = '#263773', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
    >
        <path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M8 13.167 3.333 8.5 8 3.833M12.667 8.5H3.333"
        />
    </svg>
);
export default BackIcon;
