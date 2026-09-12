"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => { const active = usePathname() === href; return <Link href={href} className={`group relative text-sm transition-colors hover:text-white ${active ? "text-white" : "text-slate-400"} ${className}`}>{title}<span className={`absolute -bottom-2 left-0 h-px bg-primary transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} /></Link>; };
export default CustomLink;
