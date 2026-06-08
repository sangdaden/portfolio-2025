export const social = [
  { url: "mailto:thanhsangtvn@gmail.com", name: "mail" },
  { url: "https://github.com/sangdaden", name: "github" },
  // Add your profiles when ready:
  // { url: "https://www.linkedin.com/in/your-handle/", name: "linkedin" },
  // { url: "https://x.com/your-handle", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
