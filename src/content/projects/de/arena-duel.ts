// NOTE: image below is a PLACEHOLDER — replace with a real screenshot.
import placeholder from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Arena Duel",
  theme: "dark",
  tags: ["three", "javascript", "css"],
  source: "https://github.com/sangdaden/AI-Coder",
  description:
    "Ein browserbasierter 3D-Ego-Shooter, in dem du dich in einer Arena mit einem KI-Gegner duellierst. Bewegung und Schießen in Echtzeit, gerendert mit Three.js und sofort im Browser spielbar — ohne Installation.<br/><br/>Ein Experiment zu Spielgefühl und einfachem KI-Verhalten im Web.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Arena Duel",
        caption: "Platzhalter — Screenshot ergänzen",
      },
    },
  ],
} as const satisfies ProjectContent;
