// NOTE: image below is a PLACEHOLDER — replace with a real screenshot.
import placeholder from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Arena Duel",
  theme: "dark",
  tags: ["three", "javascript", "css"],
  source: "https://github.com/sangdaden/AI-Coder",
  description:
    "Game bắn súng góc nhìn thứ nhất 3D chạy ngay trên trình duyệt, nơi bạn đấu tay đôi với một đối thủ AI trong đấu trường. Di chuyển và bắn theo thời gian thực, dựng bằng Three.js — chơi ngay không cần cài đặt.<br/><br/>Một thử nghiệm về cảm giác chơi game và hành vi AI đơn giản trên web.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Arena Duel",
        caption: "Ảnh tạm — hãy thay screenshot thật",
      },
    },
  ],
} as const satisfies ProjectContent;
