import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import HireMe from "@/components/HireMe";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rabiyulislam.dev"),
  title: {
    default: "Rabiyul Islam | Full Stack Developer",
    template: "%s | Rabiyul Islam",
  },
  description: "Rabiyul Islam is a full stack developer building fast, scalable web applications with React, Next.js, Node.js, NestJS, and MongoDB.",
  applicationName: "Rabiyul Islam Portfolio",
  keywords: ["Rabiyul Islam", "full stack developer", "React developer", "Next.js developer", "Node.js developer", "NestJS developer", "Bangladesh software engineer"],
  authors: [{ name: "Rabiyul Islam" }],
  creator: "Rabiyul Islam",
  publisher: "Rabiyul Islam",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rabiyul Islam",
    title: "Rabiyul Islam | Full Stack Developer",
    description: "Full stack developer building polished web experiences and reliable software systems.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rabiyul Islam — Full Stack Developer" }],
  },
  twitter: {
    card: "summary",
    title: "Rabiyul Islam | Full Stack Developer",
    description: "Full stack developer building polished web experiences and reliable software systems.",
    creator: "@shawonIslam_313",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rabiyul Islam",
              jobTitle: "Full Stack Developer",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://rabiyulislam.dev",
              sameAs: ["https://github.com/shawonislam1109", "https://www.linkedin.com/in/rabiyul-islam", "https://x.com/shawonIslam_313"],
              knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "MongoDB", "Web Development"],
              worksFor: { "@type": "Organization", name: "Shunno IT" },
            }),
          }}
        />
        <Toaster richColors closeButton position="top-center" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* Render children */}
          <div className="site-shell">
            {children}
          </div>

          {/* HireMe component */}
          <div className="relative z-10">
            {/* <HireMe /> */}
            {/* Footer component */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
