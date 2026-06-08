// NOTE: image below is a PLACEHOLDER — replace assets/thumbnails/streakon.webp
// (and the preview thumbnail) with a real One-Minute Museum screenshot.
import placeholder from "../../../assets/thumbnails/streakon.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "One-Minute Museum",
  theme: "dark",
  tags: ["next", "react", "css"],
  live: "https://one-minute-museum.vercel.app",
  source: "https://github.com/sangdaden/One-Minute-Museum",
  description:
    "A web app that turns everyday objects — a pair of Vietnamese slippers, a plastic stool — into mini museum exhibitions with AI-generated curator commentary.<br/><br/>Pick a perspective (Vietnamese culture, museum, fun fact, or design) and get a shareable artifact label, exportable as a 1080×1080 PNG. Built with Next.js, OpenAI structured outputs, and Tailwind CSS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "One-Minute Museum",
        caption: "Placeholder — add your screenshot",
      },
    },
  ],
} as const satisfies ProjectContent;
