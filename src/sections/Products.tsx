"use client";

import ConsentTrailIcon from "@/assets/consenttrail-icon.svg";
import SilentEyeIcon from "@/assets/silenteye-icon.svg";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { NetworkBackground } from "@/components/NetworkBackground";
import { CALENDLY_URL, CONSENTTRAIL_URL } from "@/lib/config";

const consentTrailCapabilities = [
  {
    label: "DSPM and shadow data",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.8-4.8" />
      </>
    ),
  },
  {
    label: "Unified software and AI BOM",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="4.5" rx="1.2" />
        <rect x="4" y="10" width="16" height="4.5" rx="1.2" />
        <rect x="4" y="16" width="16" height="4.5" rx="1.2" />
      </>
    ),
  },
  {
    label: "Agentic AI remediation",
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    label: "Automated ROPA and DPIA",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </>
    ),
  },
  {
    label: "Multi lingual consent SDK",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="8" rx="4" />
        <circle cx="15" cy="12" r="3" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "DSR and 72 hour breach response",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9.5 12l1.8 1.8L14.5 10" />
      </>
    ),
  },
];

const silentEyeCapabilities = [
  {
    label: "Wide open source coverage",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9s1.3-6.5 3.8-9z" />
      </>
    ),
  },
  {
    label: "Entity resolution across aliases",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      </>
    ),
  },
  {
    label: "Visual link analysis",
    icon: (
      <>
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7.7 8.1L11 16M16.3 8.1L13 16M8 7h8" />
      </>
    ),
  },
  {
    label: "Case timelines and evidence packs",
    icon: (
      <>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2" />
        <path d="M9 2.5h6" />
      </>
    ),
  },
  {
    label: "On premise or air gapped deployment",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="7" rx="1.5" />
        <rect x="4" y="13" width="16" height="7" rx="1.5" />
        <circle cx="8" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="8" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Auditable access and chain of custody",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9.5 12l1.8 1.8L14.5 10" />
      </>
    ),
  },
];

const CapabilityGrid = ({
  items,
}: {
  items: { label: string; icon: ReactNode }[];
}) => (
  <div className="grid grid-cols-2 gap-3 mt-6">
    {items.map((item) => (
      <div
        key={item.label}
        className="flex items-start gap-2.5 rounded-2xl bg-white/5 border border-white/10 p-3.5"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-azure-300 shrink-0 mt-0.5"
        >
          {item.icon}
        </svg>
        <span className="text-[13px] font-medium text-white/80 leading-snug">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

const ReadinessWidget = () => {
  const percentage = 82;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="panel-dark p-7 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/50">
        <span>Illustrative readiness score</span>
        <span className="text-azure-300">Demo</span>
      </div>
      <div className="relative w-36 h-36 mx-auto mt-5">
        <svg viewBox="0 0 148 148" className="w-full h-full -rotate-90">
          <circle cx="74" cy="74" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="13" />
          <motion.circle
            cx="74"
            cy="74"
            r={radius}
            fill="none"
            stroke="url(#readinessGrad)"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="readinessGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#75E4FF" />
              <stop offset="1" stopColor="#24B6F2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
          <span className="text-xs text-white/50 mt-1">DPDP readiness</span>
        </div>
      </div>
    </div>
  );
};

const agenticSteps = [
  { label: "Detect", desc: "Scanners flag a new gap" },
  { label: "Analyze", desc: "Agentic AI scopes the fix" },
  { label: "Remediate", desc: "A schema patch is proposed" },
];

const AgenticFlowWidget = () => {
  return (
    <div className="panel-dark p-7 w-full max-w-sm mx-auto">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
        Agentic AI workflow
      </div>
      <div className="relative flex justify-between items-start mt-7">
        <div className="absolute top-5 left-10 right-10 h-px bg-white/15" />
        {agenticSteps.map((step, index) => (
          <div key={step.label} className="relative z-10 flex flex-col items-center text-center w-1/3 px-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azure-300 to-azure-500 text-navy-900 flex items-center justify-center text-sm font-semibold shadow-[0_0_18px_rgba(36,182,242,0.4)]">
              {index + 1}
            </div>
            <div className="text-xs font-semibold text-white mt-2.5">{step.label}</div>
            <div className="text-[11px] text-white/50 mt-1 leading-snug">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const graphNodes = [
  { x: 50, y: 50, size: 11, primary: true, label: "" },
  { x: 18, y: 25, size: 5.5, label: "Social" },
  { x: 84, y: 20, size: 5.5, label: "Messaging" },
  { x: 90, y: 62, size: 5.5, label: "Forums" },
  { x: 68, y: 88, size: 5.5, label: "Public records" },
  { x: 26, y: 82, size: 5.5, label: "Identifiers" },
  { x: 10, y: 55, size: 5.5, label: "Aliases" },
];

const EntityGraphWidget = () => {
  return (
    <div className="panel-dark p-7 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/50">
        <span>Illustrative entity graph</span>
        <span className="text-azure-300">Demo</span>
      </div>
      <div className="relative w-full aspect-square mt-6">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="graphGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#24B6F2" stopOpacity="0.4" />
              <stop offset="1" stopColor="#24B6F2" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="graphIris" cx="50%" cy="50%" r="60%">
              <stop offset="0" stopColor="#24B6F2" />
              <stop offset="1" stopColor="#061A3A" />
            </radialGradient>
          </defs>
          <circle cx={50} cy={50} r={32} fill="url(#graphGlow)" />
          {graphNodes.slice(1).map((node) => (
            <line
              key={node.label}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              stroke="#75E4FF"
              strokeOpacity={0.35}
              strokeWidth={0.7}
            />
          ))}
          {graphNodes.slice(1).map((node) => (
            <circle key={`dot-${node.label}`} cx={node.x} cy={node.y} r={node.size / 2} fill="#24B6F2" />
          ))}
          <motion.g
            style={{ transformOrigin: "50px 50px" }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M36.9 50C41.2 42.4 45.6 37.8 50 37.8s8.8 4.6 13.1 12.2C58.8 57.6 54.4 62.2 50 62.2S41.2 57.6 36.9 50Z"
              fill="#FFFFFF"
              stroke="#75E4FF"
              strokeWidth="1.3"
            />
            <circle cx={50} cy={50} r={5.3} fill="url(#graphIris)" />
            <circle cx={48.5} cy={48.3} r={1.1} fill="#FFFFFF" opacity="0.9" />
          </motion.g>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {graphNodes
          .filter((n) => n.label)
          .map((node) => (
            <span
              key={node.label}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-azure-200 border border-white/15"
            >
              {node.label}
            </span>
          ))}
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <section id="products" className="relative bg-navy-900 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <NetworkBackground color="rgba(117, 228, 255, 0.4)" lineColor="117, 228, 255" />
      </div>
      <div className="glow-blob top-1/3 -left-40 w-[480px] h-[480px] bg-azure-600/25" />
      <div className="glow-blob bottom-0 -right-40 w-[480px] h-[480px] bg-azure-400/15" />

      <div className="container relative">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="tag-dark">Our platforms</div>
          </div>
          <h2 className="section-title-dark mt-5">Two platforms, built for the mission</h2>
          <p className="section-description-dark mt-5">
            We build the platforms ourselves and stand behind every deployment,
            from a government data centre to a field investigation unit.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 panel-dark p-8 md:p-14 grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center">
              <ConsentTrailIcon className="w-8 h-8" />
            </div>
            <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-azure-300">
              DPDP Compliance Platform
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 tracking-tight">
              ConsentTrail
            </h3>
            <p className="text-white/60 mt-4 leading-relaxed">
              ConsentTrail takes organisations from scattered spreadsheets to a
              single governance system for the DPDP Act 2023. It runs continuous
              DSPM across cloud, email and AI systems, keeps a unified software
              and AI bill of materials, and uses agentic AI to close the gaps it
              finds while keeping consent, breach response and data subject
              requests moving on the clocks the law sets.
            </p>
            <CapabilityGrid items={consentTrailCapabilities} />
            <a
              href={CONSENTTRAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-8"
            >
              Explore ConsentTrail
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <ReadinessWidget />
            <AgenticFlowWidget />
          </div>
        </motion.div>

        <motion.div
          className="mt-10 panel-dark p-8 md:p-14 grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:order-2">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center">
              <SilentEyeIcon className="w-8 h-8" />
            </div>
            <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-azure-300">
              OSINT Investigation Platform
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 tracking-tight">
              SilentEye
            </h3>
            <p className="text-white/60 mt-4 leading-relaxed">
              SilentEye is built for law enforcement and intelligence teams who
              need to move from a name, number or handle to a full picture fast.
              It pulls public information from social platforms, messaging
              channels, forums and public records into one workspace, then maps
              how people, places and identities connect.
            </p>
            <CapabilityGrid items={silentEyeCapabilities} />
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-8"
            >
              Request access
            </a>
          </div>
          <div className="md:order-1">
            <EntityGraphWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
