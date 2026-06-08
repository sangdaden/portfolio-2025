// NOTE: image below is a PLACEHOLDER — replace assets/thumbnails/sharkie.webp
// (and the preview thumbnail) with a real Lumina Wiki screenshot.
import placeholder from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Lumina Wiki",
  theme: "light",
  tags: ["node", "javascript"],
  source: "https://github.com/sangdaden/lumina-wiki",
  description:
    "An AI-powered research assistant that turns raw documents into an interconnected wiki you can query in natural language. Ingest sources, build a knowledge graph, and ask context-aware questions across everything you've read.<br/><br/>Supports multiple AI backends (Claude, Gemini, OpenAI) with optional research and reading packs, plus Obsidian integration for browsing linked notes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Lumina Wiki",
        caption: "Placeholder — add your screenshot",
      },
    },
  ],
} as const satisfies ProjectContent;
