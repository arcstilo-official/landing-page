"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "Defence",
    description:
      "Platforms and consulting for army, air force and navy formations that need sovereign, air gapped tooling built to their operating tempo.",
    icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  },
  {
    title: "Law enforcement and intelligence",
    description:
      "Investigation and OSINT tooling built for the pace and evidentiary standards that law enforcement and intelligence teams work under.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
      </>
    ),
  },
  {
    title: "Government and PSU",
    description:
      "Compliance and security platforms sized for ministries, public sector undertakings and regulated boards, not just private enterprise.",
    icon: (
      <>
        <path d="M4 21h16" />
        <path d="M6 21V9l6-4 6 4v12" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
  },
  {
    title: "Enterprise and critical infrastructure",
    description:
      "The same sovereign engineering we build for defence, applied to enterprises and infrastructure operators that carry national scale risk.",
    icon: (
      <>
        <rect x="3" y="10" width="7" height="11" />
        <rect x="14" y="4" width="7" height="17" />
        <path d="M3 10l7-6 4 3" />
      </>
    ),
  },
];

const alsoServing = [
  "BFSI and fintech",
  "Healthcare and pharma",
  "Telecom",
  "Online retail and D2C",
  "SaaS and enterprise IT",
  "Energy and utilities",
];

const deploymentModels = [
  {
    title: "Self hosted or private cloud",
    description:
      "Deploy inside your own AWS, Azure, GCP or on premise infrastructure with zero mandatory external dependency.",
    icon: (
      <>
        <path d="M7 18a4.5 4.5 0 010-9 5.5 5.5 0 0110.6-1.7A4 4 0 0117 15" />
        <path d="M7 18h10" />
      </>
    ),
  },
  {
    title: "Air gapped and on premise",
    description:
      "Fully offline deployment for defence and intelligence environments with no external connectivity.",
    icon: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="1.5" />
        <path d="M8 10V7a4 4 0 118 0v3" />
      </>
    ),
  },
  {
    title: "Managed workspace",
    description:
      "An isolated tenant workspace managed by Arcstilo for organisations that want the platform without running the infrastructure.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
];

export const Sectors = () => {
  const [activeDeployment, setActiveDeployment] = useState(0);

  return (
    <section id="sectors" className="relative bg-gradient-to-b from-white via-azure-50/40 to-navy-50/40 py-24 overflow-hidden">
      <div className="glow-blob top-1/4 -left-40 w-[550px] h-[550px] bg-azure-200/40" />
      <div className="glow-blob bottom-0 right-0 w-[450px] h-[450px] bg-azure-100/50" />
      <div className="container relative">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="tag">Who we serve</div>
          </div>
          <h2 className="section-title mt-5">Built for high stakes environments</h2>
          <p className="section-description mt-5">
            From a battalion headquarters to a regulated enterprise, the same
            sovereign engineering stands behind every deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              className="panel hover-lift p-8 flex gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-navy-900 flex items-center justify-center text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  {sector.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{sector.title}</h3>
                <p className="text-[15px] text-navy-500 mt-2 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 py-6 border-y border-navy-900/[0.08]">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-azure-600 mb-5">
            Also trusted across
          </p>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-3 flex-none pr-3"
              animate={{ translateX: "-50%" }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {[...alsoServing, ...alsoServing].map((industry, index) => (
                <span
                  key={index}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-white border border-navy-900/[0.08] text-navy-900/80 whitespace-nowrap shrink-0"
                >
                  {industry}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-24 section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="tag">Deployment</div>
          </div>
          <h2 className="section-title mt-5">Flexible for every environment</h2>
          <p className="section-description mt-5">
            Every engagement starts with where your data is allowed to live.
          </p>
        </motion.div>

        <div className="panel p-3 md:p-4 mt-14 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-2">
            {deploymentModels.map((model, index) => {
              const isActive = index === activeDeployment;
              return (
                <button
                  key={model.title}
                  onClick={() => setActiveDeployment(index)}
                  className={
                    "rounded-2xl p-5 text-center transition-colors duration-200 " +
                    (isActive
                      ? "bg-navy-900 text-white"
                      : "bg-azure-50/60 text-navy-900 hover:bg-azure-50")
                  }
                >
                  <div
                    className={
                      "w-10 h-10 rounded-xl mx-auto flex items-center justify-center " +
                      (isActive ? "bg-white/15" : "bg-white")
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={"w-5 h-5 " + (isActive ? "text-white" : "text-azure-500")}
                    >
                      {model.icon}
                    </svg>
                  </div>
                  <div className="text-sm font-semibold mt-3">{model.title}</div>
                </button>
              );
            })}
          </div>
          <p className="text-[15px] text-navy-500 leading-relaxed text-center px-4 py-6">
            {deploymentModels[activeDeployment].description}
          </p>
        </div>
      </div>
    </section>
  );
};
