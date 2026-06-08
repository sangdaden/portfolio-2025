// NOTE: image below is a PLACEHOLDER — replace with a real screenshot.
import placeholder from "../../../assets/thumbnails/streakon.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "One-Minute Museum",
  theme: "dark",
  tags: ["next", "react", "css"],
  live: "https://one-minute-museum.vercel.app",
  source: "https://github.com/sangdaden/One-Minute-Museum",
  description:
    "Eine Web-App, die Alltagsgegenstände — vietnamesische Sandalen, ein Plastikhocker — in kleine Museumsausstellungen mit KI-generierten Kuratorentexten verwandelt.<br/><br/>Wähle eine Perspektive (vietnamesische Kultur, Museum, Fun Fact oder Design) und erhalte ein teilbares Ausstellungsschild, exportierbar als 1080×1080-PNG. Gebaut mit Next.js, OpenAI Structured Outputs und Tailwind CSS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "One-Minute Museum",
        caption: "Platzhalter — Screenshot ergänzen",
      },
    },
  ],
} as const satisfies ProjectContent;
