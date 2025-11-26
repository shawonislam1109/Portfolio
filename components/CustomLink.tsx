"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  // Get the current pathname using usePathname
  const pathname = usePathname();

  // Check if the current route matches the href
  const isActive = pathname === href;

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-fuchsia-400 dark:bg-fuchsia-400 absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : ""
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
