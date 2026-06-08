// NOTE: thumbnails below are PLACEHOLDERS reused from the original template.
import thumbnailMuseum from "../../../assets/thumbnails/streakon.webp";
import thumbnailArena from "../../../assets/thumbnails/pokedex.webp";
import thumbnailLumina from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "One-Minute Museum",
    slug: "one-minute-museum",
    thumbnail: thumbnailMuseum,
    description: "KI-Generator für Ausstellungsschilder",
  },
  {
    title: "Arena Duel",
    slug: "arena-duel",
    thumbnail: thumbnailArena,
    description: "3D-Shooter gegen einen KI-Gegner",
  },
  {
    title: "Lumina Wiki",
    slug: "lumina-wiki",
    thumbnail: thumbnailLumina,
    description: "KI-Recherche-Assistent",
  },
] as const satisfies ProjectPreview[];
