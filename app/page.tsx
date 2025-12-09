// app/page.tsx (or your Home component)
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import AnimatedText from "@/components/AnimatedText";
import { mySelf } from "@/lib/bioinfo";
import { Button } from "@/components/ui/button";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Rabiyul Islam - Full Stack Developer",
  description:
    "Rabiyul Islam's personal portfolio. Explore projects, skills, articles, and contact information.",
  openGraph: {
    title: "Rabiyul Islam - Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and modern web technologies.",
    images: "/images/profile-og-image.jpg",
  },
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} flex mt-20 lg:mt-0 flex-col lg:flex-row items-center w-full gap-8 min-h-screen lg:px-16`}
    >
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start w-full lg:w-5/12">
        <ImageComponent />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Header Title */}
        <AnimatedText
          text={mySelf.headerTitle}
          className="!text-3xl lg:!text-5xl font-semibold"
        />

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {mySelf.hederDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center lg:items-start gap-4 mt-6">
          {/* Resume button downloads CV */}
          <a href="/flies/Rabiyul_Islam_resume.pdf" download>
            <Button variant="outline" className="w-full sm:w-auto">
              Download Resume
            </Button>
          </a>

          {/* Contact button */}
          <Button variant="link" className="w-full sm:w-auto">
            <Link href={"/contact"}>Contact</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
