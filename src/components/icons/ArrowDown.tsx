const ArrowDownIcon = ({ color='#7D87AB', width = 12, height = 7, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width={width} height={height} fill="none" {...props}>
        <path stroke={color} d="M1.6 1.2 6.4 6l4.8-4.8" />
    </svg>
);
export default ArrowDownIcon;
