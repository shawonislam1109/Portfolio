import { Poppins } from "next/font/google"; // Import Poppins font
import AnimatedText from "@/components/AnimatedText"; // Animated text component
import { mySelf } from "@/lib/bioinfo"; // Replace with your actual bio info
import { Button } from "@/components/ui/button"; // ShadCN button component
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";

// Import the Poppins font
const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${roboto.className} flex mt-20 lg:mt-0 flex-col lg:flex-row items-center w-full gap-8 min-h-screen  lg:px-16`}
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
          className="!text-3xl  lg:!text-5xl font-semibold"
        />

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {mySelf.hederDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center lg:items-start gap-4 mt-6">
          <Button variant="outline" className="w-full sm:w-auto">
            Resume
          </Button>
          <Button variant="link" className="w-full sm:w-auto">
            <Link href={"/contact"}> Contact</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
