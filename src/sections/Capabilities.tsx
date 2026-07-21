"use client";

import { motion } from "framer-motion";
import { NetworkBackground } from "@/components/NetworkBackground";

const capabilities = [
  {
    title: "Owned, not resold",
    description:
      "Every platform we ship is built and owned by Arcstilo. No white labelled foreign products, no reselling. Full source control for customers who need it.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    ),
  },
  {
    title: "Veteran led engineering",
    description:
      "Founded and staffed by veterans of the Indian Army, Indian Air Force and enterprise security teams including HCL, with over 20 years of combined operational experience.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </>
    ),
  },
  {
    title: "Sovereign by design",
    description:
      "Self hosted, private cloud or air gapped deployment models built for defence and government environments that cannot depend on foreign infrastructure.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
        <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="8" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Consulting through to code",
    description:
      "Our advisory teams design the controls and our engineers build and operate the platforms that enforce them, for one accountable partner end to end.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h16" />
    ),
  },
  {
    title: "Proven with government",
    description:
      "Already deployed with the Indian Army and public sector undertakings, with delivery timelines built around mission and audit calendars, not sprint boards.",
    icon: (
      <path d="M12 2l2.2 6.6H21l-5.4 4 2 6.6L12 15.8 6.4 19.2l2-6.6L3 8.6h6.8z" />
    ),
  },
  {
    title: "24x7 mission support",
    description:
      "Dedicated support with direct lines into engineering for customers whose operations cannot pause, backed by our own team, not a call centre.",
    icon: (
      <>
        <path d="M4 13a8 8 0 0116 0" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
      </>
    ),
  },
];

export const Capabilities = () => {
  return (
    <section id="platform" className="relative bg-navy-900 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <NetworkBackground color="rgba(117, 228, 255, 0.45)" lineColor="117, 228, 255" />
      </div>
      <div className="glow-blob top-0 left-1/4 w-[550px] h-[550px] bg-azure-600/25" />
      <div className="glow-blob bottom-0 right-1/4 w-[450px] h-[450px] bg-azure-400/15" />

      <div className="container relative">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="tag-dark">Why Arcstilo</div>
          </div>
          <h2 className="section-title-dark mt-5">Built by operators, not vendors</h2>
          <p className="section-description-dark mt-5">
            Arcstilo started in stealth with people who have carried the problem
            themselves, not just sold a solution for it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              className="panel-dark hover-lift-dark p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-azure-500 to-azure-300 flex items-center justify-center text-navy-900 shadow-[0_0_24px_rgba(36,182,242,0.35)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mt-5">
                {item.title}
              </h3>
              <p className="text-[15px] text-white/60 mt-2.5 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
