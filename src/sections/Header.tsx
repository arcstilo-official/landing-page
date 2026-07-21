"use client";

import ArcstiloLogo from "@/assets/arcstilo-logo.svg";
import MenuIcon from "@/assets/menu.svg";
import { CALENDLY_URL } from "@/lib/config";
import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Sectors", href: "#sectors" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-navy-900/[0.08]">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center shrink-0">
            <ArcstiloLogo className="h-8 md:h-9 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-navy-900/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-azure-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Book a briefing
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon className="w-6 h-6 text-navy-900" />
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 text-navy-900/80 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent w-full mt-2"
            >
              Book a briefing
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
