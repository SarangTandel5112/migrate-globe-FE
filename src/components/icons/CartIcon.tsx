const CartIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#696969"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
    </svg>
);
export default CartIcon;
