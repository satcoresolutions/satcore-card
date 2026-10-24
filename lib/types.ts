export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface CardLink {
  label: string;
  url: string;
}

export interface WhatsAppData {
  phone: string;
  message: string;
}

export interface CardLocation {
  label: string;
  mapsQuery: string;
}

export interface CardData {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  bio: string;
  photo?: string;
  whatsapp: WhatsAppData;
  phone: string;
  email: string;
  website?: string;
  location?: CardLocation;
  socials: SocialLink[];
  links?: CardLink[];
}