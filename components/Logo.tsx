"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Logo = () => <Link href="/" aria-label="Rabiyul Islam home" className="group flex items-center gap-3"><motion.span whileHover={{ rotate: -8, scale: 1.06 }} className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet-500 text-sm font-black text-slate-950 shadow-[0_0_30px_rgba(74,222,200,.25)]">RI</motion.span><span className="hidden text-sm font-semibold tracking-tight text-white sm:block">rabiyul<span className="text-primary">.</span>islam</span></Link>;
export default Logo;
