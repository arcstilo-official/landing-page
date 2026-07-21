import ArcstiloLogo from "@/assets/arcstilo-logo.svg";
import { PARTNER_EMAIL, SUPPORT_EMAIL } from "@/lib/config";

const footerLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products" },
  { label: "Sectors", href: "#sectors" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white/60 text-sm py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <ArcstiloLogo className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-white/50 leading-relaxed">
              Make in India cybersecurity OEM, building sovereign platforms for
              defence, law enforcement, government and enterprise.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">
              {SUPPORT_EMAIL}
            </a>
            <a href={`mailto:${PARTNER_EMAIL}`} className="hover:text-white transition-colors">
              {PARTNER_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-white/40 text-xs">
          &copy; 2026 Arcstilo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
