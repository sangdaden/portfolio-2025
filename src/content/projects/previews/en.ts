// NOTE: thumbnails below are PLACEHOLDERS reused from the original template.
// Replace assets/thumbnails/{streakon,pokedex,sharkie}.webp with your own
// project card images (keep the same filenames, or update the imports).
import thumbnailMuseum from "../../../assets/thumbnails/streakon.webp";
import thumbnailArena from "../../../assets/thumbnails/pokedex.webp";
import thumbnailLumina from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "One-Minute Museum",
    slug: "one-minute-museum",
    thumbnail: thumbnailMuseum,
    description: "AI museum-label generator",
  },
  {
    title: "Arena Duel",
    slug: "arena-duel",
    thumbnail: thumbnailArena,
    description: "3D FPS vs. an AI opponent",
  },
  {
    title: "Lumina Wiki",
    slug: "lumina-wiki",
    thumbnail: thumbnailLumina,
    description: "AI research assistant",
  },
] as const satisfies ProjectPreview[];
