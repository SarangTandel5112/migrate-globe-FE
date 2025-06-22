const GridIcon = ({ width = 16, height = 16, color = "#7D87AB" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M6 2H2.667A.667.667 0 0 0 2 2.667V6c0 .368.298.667.667.667H6A.667.667 0 0 0 6.667 6V2.667A.667.667 0 0 0 6 2ZM13.334 2h-3.333a.667.667 0 0 0-.667.667V6c0 .368.298.667.667.667h3.333A.667.667 0 0 0 14.001 6V2.667A.667.667 0 0 0 13.334 2ZM13.334 9.333h-3.333a.667.667 0 0 0-.667.667v3.333c0 .368.298.667.667.667h3.333a.667.667 0 0 0 .667-.667V10a.667.667 0 0 0-.667-.667ZM6 9.333H2.667A.667.667 0 0 0 2 10v3.333c0 .368.298.667.667.667H6a.667.667 0 0 0 .667-.667V10A.667.667 0 0 0 6 9.333Z"
        />
    </svg>
);
export default GridIcon;
