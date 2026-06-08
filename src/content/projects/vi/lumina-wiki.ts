// NOTE: image below is a PLACEHOLDER — replace with a real screenshot.
import placeholder from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Lumina Wiki",
  theme: "light",
  tags: ["node", "javascript"],
  source: "https://github.com/sangdaden/lumina-wiki",
  description:
    "Trợ lý nghiên cứu dùng AI, biến tài liệu thô thành một wiki liên kết mà bạn có thể hỏi bằng ngôn ngữ tự nhiên. Nạp nguồn, dựng đồ thị tri thức, và đặt câu hỏi theo ngữ cảnh trên toàn bộ những gì bạn đã đọc.<br/><br/>Hỗ trợ nhiều backend AI (Claude, Gemini, OpenAI) cùng các gói nghiên cứu và đọc tuỳ chọn, tích hợp Obsidian để duyệt các ghi chú liên kết.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: placeholder,
        alt: "Lumina Wiki",
        caption: "Ảnh tạm — hãy thay screenshot thật",
      },
    },
  ],
} as const satisfies ProjectContent;
