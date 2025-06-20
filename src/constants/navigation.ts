export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/", isActive: true },
  { name: "Visa", href: "/services/visa" },
  { name: "Services", href: "/services" },
  { name: "Insurance", href: "/services/insurance" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];
