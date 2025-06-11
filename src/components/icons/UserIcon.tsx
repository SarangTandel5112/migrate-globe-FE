const UserIcon = (props: any) => (
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
            strokeWidth={2}
            d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
        <path
            stroke="#263773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21a8 8 0 0 0-16 0"
        />
    </svg>
);
export default UserIcon;
