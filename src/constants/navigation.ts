export interface NavigationGroupItem {
  name: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationGroupItem[];
}
export interface NavigationItem {
  name: string;
  href: string;
  type?: string;
  groups?: NavigationGroup[];
  isActive?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/", isActive: true },
  { name: "Visa", href: "/services/visa", type: "mega",
    groups: [
      {
        title: "Study Visa",
        items: [
          { name: "USA Student Visa", href: "/visa/usa-student" },
          { name: "UK Student Visa", href: "/visa/uk-student" },
          { name: "Canada Study Permit", href: "/visa/canada-study" },
        ],
      },
      {
        title: "Work Visa",
        items: [
          { name: "Germany Job Seeker Visa", href: "/visa/germany-job" },
          { name: "Australia Work Visa", href: "/visa/australia-work" },
          { name: "UK Skilled Worker Visa", href: "/visa/uk-skilled" },
        ],
      },
      {
        title: "Tourist Visa",
        items: [
          { name: "Schengen Visa", href: "/visa/schengen" },
          { name: "Dubai Tourist Visa", href: "/visa/dubai" },
          { name: "Thailand Visa", href: "/visa/thailand" },
        ],
      },
    ], 
  },
  { name: "Services", href: "/services" },
  { name: "Insurance", href: "/services/insurance" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];
