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
    "Một web app biến những vật bình thường quanh bạn — đôi dép, chiếc ghế nhựa — thành một triển lãm mini với lời thuyết minh do AI tạo.<br/><br/>Chọn một góc nhìn (văn hoá Việt, bảo tàng, fun fact, hoặc thiết kế) và nhận về một tấm nhãn hiện vật có thể chia sẻ, xuất ra ảnh PNG 1080×1080. Xây bằng Next.js, OpenAI structured outputs và Tailwind CSS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "One-Minute Museum",
        caption: "Ảnh tạm — hãy thay screenshot thật",
      },
    },
  ],
} as const satisfies ProjectContent;
