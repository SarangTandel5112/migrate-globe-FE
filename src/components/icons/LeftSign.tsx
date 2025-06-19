const LeftSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 9}
    height={props.height || 15}
    fill="none"
    viewBox="0 0 9 15"
    className={props.className || ''}
  >
    <path 
      stroke={props.color || '#696969'} 
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.5 14-6-6.462 6-6.462" 
    />
    {/* <path stroke={props.color} d="m7.5 14-6-6.462 6-6.462" /> */}
  </svg>
)

export default LeftSignIcon