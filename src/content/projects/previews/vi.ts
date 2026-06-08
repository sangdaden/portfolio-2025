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
    description: "Tạo nhãn triển lãm bằng AI",
  },
  {
    title: "Arena Duel",
    slug: "arena-duel",
    thumbnail: thumbnailArena,
    description: "Game bắn súng 3D đấu với AI",
  },
  {
    title: "Lumina Wiki",
    slug: "lumina-wiki",
    thumbnail: thumbnailLumina,
    description: "Trợ lý nghiên cứu AI",
  },
] as const satisfies ProjectPreview[];
