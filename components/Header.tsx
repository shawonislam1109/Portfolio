"use client";

import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import CustomLink from "./CustomLink";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  GitHubIcon,
  // GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons/socialIcnos";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 fixed top-0 left-0 bg-white dark:bg-black z-50 shadow-md">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/skills" title="Skills" />
          <CustomLink href="/experiences" title="Experiences" />
          <CustomLink href="/article" title="Article" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        {/* Social Icons and Mode Toggle */}
        <div className="flex items-center gap-4">
          {/* Social Icons - Hidden on small screens */}
          <div className="hidden sm:flex gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shawonislam1109"
              target="_blank"
              className="text-muted-foreground dark:text-white"
            >
              <GitHubIcon size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/rabiyul-islam"
              target="_blank"
              className="text-muted-foreground"
            >
              <LinkedInIcon size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/shawonIslam_313"
              target="_blank"
              className="text-muted-foreground"
            >
              <TwitterIcon size={20} color="#1DA1F2" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/shawon.islam.678156/"
              target="_blank"
              className="text-muted-foreground"
            >
              <FacebookIcon size={20} />
            </motion.a>
          </div>

          {/* Mode Toggle */}
          <ModeToggle />

          {/* Mobile Menu - Visible on small screens */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <nav className="flex flex-col gap-4">
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/skills" title="Skills" />
                <CustomLink href="/experiences" title="Experiences" />
                <CustomLink href="/article" title="Article" />
                <CustomLink href="/contact" title="Contact" />
              </nav>

              <div className="mt-6 flex gap-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/shawonislam1109"
                  target="_blank"
                  className="text-muted-foreground"
                >
                  <GitHubIcon size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/rabiyul-islam"
                  target="_blank"
                  className="text-muted-foreground"
                >
                  <LinkedInIcon size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://x.com/shawonIslam_313"
                  target="_blank"
                  className="text-muted-foreground"
                >
                  <FacebookIcon size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/shawon.islam.678156/"
                  target="_blank"
                  className="text-muted-foreground"
                >
                  <TwitterIcon size={20} color="#1DA1F2" />
                </motion.a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
