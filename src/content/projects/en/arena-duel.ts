// NOTE: image below is a PLACEHOLDER — replace assets/thumbnails/pokedex.webp
// (and the preview thumbnail) with a real Arena Duel screenshot.
import placeholder from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Arena Duel",
  theme: "dark",
  tags: ["three", "javascript", "css"],
  source: "https://github.com/sangdaden/AI-Coder",
  description:
    "A browser-based 3D first-person shooter where you duel an AI opponent in an arena. Real-time movement and shooting, rendered with Three.js and playable instantly in the browser — no install required.<br/><br/>An experiment in building game feel and simple AI behaviour on the web.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Arena Duel",
        caption: "Placeholder — add your screenshot",
      },
    },
  ],
} as const satisfies ProjectContent;
