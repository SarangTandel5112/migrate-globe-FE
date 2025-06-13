const LocationIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <g
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.145}
            {...props}
            clipPath="url(#a)"
        >
            <path d="M8.59 12.598a.573.573 0 0 1-.572-.572v-2.29a.573.573 0 0 1 .254-.477L9.99 8.113a.573.573 0 0 1 .636 0l1.718 1.146a.572.572 0 0 1 .255.476v2.29a.573.573 0 0 1-.573.573H8.59ZM10.307 5.727a4.581 4.581 0 1 0-9.162 0c0 2.859 3.171 5.837 4.237 6.756.099.075.22.115.344.115M10.309 12.598V10.88" />
            <path d="M5.726 7.445a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h13.744v13.744H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default LocationIcon;
