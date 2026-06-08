export const social = [
  { url: "mailto:thanhsangtvn@gmail.com", name: "mail" },
  { url: "https://github.com/sangdaden", name: "github" },
  { url: "https://www.linkedin.com/in/sang-phanthanh/", name: "linkedin" },
  { url: "https://www.facebook.com/sang.phan.249/", name: "facebook" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" | "facebook" }[];
