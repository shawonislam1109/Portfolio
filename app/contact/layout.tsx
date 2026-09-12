import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rabiyul Islam to discuss full stack web development, product engineering, or collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
