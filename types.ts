export interface NavLink {
  href: string;
  label: string;
}

export interface MissionItem {
  id: string;
  englishTitle?: string; // Added for English subtitle (MVV)
  title: string;
  description: string;
  imageUrl?: string; // Added to use images instead of icons
  icon?: React.ReactNode; // Kept for potential fallback, but imageUrl will be prioritized
}

export interface WineItem {
  id: string;
  name: string;
  category?: string; 
  keywords?: string; 
  varietal?: string; 
  region?: string; 
  tastingNotes?: string;
  imageUrl: string;
  description?: string;
}

export interface FounderInfo {
  name: string;
  title: string;
  portraitUrl: string;
  bio: string[]; 
  story: string;
  values: string[];
  sns: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// TerroirRegion interface is removed as the section is deleted.
// export interface TerroirRegion {
//   id: string;
//   name: string;
//   description: string;
//   x: string; 
//   y: string; 
// }

export interface BusinessActivityItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}