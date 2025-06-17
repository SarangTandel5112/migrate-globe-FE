const LeftSignIcon = ({ color = '#696969', width = 9, height = 15, className = '' }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 9 15"
    className={className}
  >
    <path 
      stroke={color} 
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.5 14-6-6.462 6-6.462" 
    />
    {/* <path stroke={color} d="m7.5 14-6-6.462 6-6.462" /> */}
  </svg>
)

export default LeftSignIcon