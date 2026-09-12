import Link from "next/link";
const Footer = () => <footer className="site-shell pt-8"><div className="glass flex flex-col gap-5 rounded-2xl px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Rabiyul Islam. Built with care.</p><div className="flex gap-5"><Link href="/projects" className="hover:text-primary">Selected work</Link><Link href="/contact" className="hover:text-primary">Start a project ↗</Link></div></div></footer>;
export default Footer;
