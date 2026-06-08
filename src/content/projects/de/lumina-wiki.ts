// NOTE: image below is a PLACEHOLDER — replace with a real screenshot.
import placeholder from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Lumina Wiki",
  theme: "light",
  tags: ["node", "javascript"],
  source: "https://github.com/sangdaden/lumina-wiki",
  description:
    "Ein KI-gestützter Recherche-Assistent, der Rohdokumente in ein vernetztes Wiki verwandelt, das du in natürlicher Sprache abfragen kannst. Quellen einlesen, einen Wissensgraphen aufbauen und kontextbezogene Fragen über alles Gelesene stellen.<br/><br/>Unterstützt mehrere KI-Backends (Claude, Gemini, OpenAI) mit optionalen Recherche- und Lese-Packs sowie Obsidian-Integration.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Lumina Wiki",
        caption: "Platzhalter — Screenshot ergänzen",
      },
    },
  ],
} as const satisfies ProjectContent;
