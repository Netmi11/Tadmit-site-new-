
export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  videoThumb: string;
  number: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconType: 'home' | 'building';
  bullets: string[];
  href: string; // Added href for direct navigation
}
