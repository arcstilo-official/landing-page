"use client";

import IndianArmy from "@/assets/customers/indian-army.svg";
import halLogo from "@/assets/customers/hal.png";
import belLogo from "@/assets/customers/bel.jpg";
import { motion } from "framer-motion";

const rasterLogos = [
  { src: halLogo.src, alt: "Hindustan Aeronautics Limited" },
  { src: belLogo.src, alt: "Bharat Electronics Limited" },
];

const LogoSet = () => (
  <>
    <div className="h-10 md:h-12 flex items-center">
      <IndianArmy className="logo-ticker-image" />
    </div>
    {rasterLogos.map((logo) => (
      <div key={logo.alt} className="h-10 md:h-12 flex items-center">
        <img src={logo.src} alt={logo.alt} className="logo-ticker-image" />
      </div>
    ))}
  </>
);

export const LogoTicker = () => {
  return (
    <div className="py-10 md:py-14 bg-gradient-to-r from-azure-50/40 via-white to-azure-50/40 border-y border-navy-900/[0.06]">
      <div className="container">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-navy-500 mb-8">
          Trusted by the Indian Army and public sector undertakings
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-16 flex-none pr-16 items-center"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <LogoSet />
            <LogoSet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
