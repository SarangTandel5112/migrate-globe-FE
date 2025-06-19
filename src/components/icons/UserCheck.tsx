const UserCheck = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <circle
            cx={6.75}
            cy={5.25}
            r={3}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
        />
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M2.25 15.75v-1.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v1.5M12 8.25l1.5 1.5 3-3"
        />
    </svg>
);
export default UserCheck;
