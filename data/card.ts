/**
 * Edita SOLO este archivo para personalizar la tarjeta.
 * Para la foto: pon la imagen en /public y escribe su ruta, ej. "/foto.jpg".
 */
export interface CardData {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  bio: string;
  photo?: string;
  whatsapp: { phone: string; message: string };
  phone: string;
  email: string;
  website?: string;
  location?: { label: string; mapsQuery: string };
  socials: { label: string; handle: string; url: string }[];
  links?: { label: string; url: string }[];
}

export const card: CardData = {
  firstName: "Erick",
  lastName: "Hernández",
  role: "Desarrollador web",
  company: "SatCore Solutions",
  bio: "Creo plataformas web y sistemas de diseño para proyectos culturales, comerciales y corporativos.",
  photo: "/image.jpg",
  whatsapp: {
    phone: "573022016072",
    message: "Hola, vi tu tarjeta y quiero conversar sobre un proyecto.",
  },
  phone: "+57 302 201 6072",
  email: "erick.hdz9628@gmail.com",
  website: "https://www.satcore.solutions/",
  location: { label: "Bogotá, Colombia", mapsQuery: "Bogotá, Colombia" },
  socials: [
    { label: "Instagram", handle: "@sapereaude.jsh", url: "https://www.instagram.com/sapereaude.jsh/" },
    { label: "LinkedIn", handle: "erick-hernandez-sapere-aude", url: "https://www.linkedin.com/in/erick-hernandez-sapere-aude/" },
    { label: "GitHub", handle: "Erick28Hdz", url: "https://github.com/Erick28Hdz" },
  ],
  links: [{ label: "Ver portafolio", url: "https://portafolio-erickhdz.vercel.app/" }],
};
