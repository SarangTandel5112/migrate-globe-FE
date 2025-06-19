import * as React from "react"
const CalendarIcon = ({ color = '#7D87AB', width = 20, height = 20, className = '' }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={className}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.451 1.6v3.2M12.852 1.6v3.2M15.251 3.2h-11.2a1.6 1.6 0 0 0-1.6 1.6V16a1.6 1.6 0 0 0 1.6 1.6h11.2a1.6 1.6 0 0 0 1.6-1.6V4.8a1.6 1.6 0 0 0-1.6-1.6ZM2.451 8h14.4M6.451 11.2h.008M9.65 11.2h.008M12.852 11.2h.008M6.451 14.4h.008M9.65 14.4h.008M12.852 14.4h.008"
    />
  </svg>
)
export default CalendarIcon