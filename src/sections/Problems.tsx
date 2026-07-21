"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const problems = [
  {
    title: "Compliance is scattered and reactive",
    problem:
      "Personal data compliance usually lives in spreadsheets, email threads and annual audits, so nobody finds a DPDP gap until CERT-In or the Data Protection Board does.",
    outcome:
      "ConsentTrail runs continuous DSPM across cloud, email and AI systems, keeps a live bill of materials, and lets agentic AI close the gaps it finds instead of waiting for the next audit.",
  },
  {
    title: "Investigations move slower than the people you are chasing",
    problem:
      "Building a single subject profile means switching between dozens of open platforms by hand, and the connections between them get lost between tools.",
    outcome:
      "SilentEye pulls that work into one workspace with the sources correlated and the links already mapped.",
  },
  {
    title: "Sovereignty is not optional in defence and government",
    problem:
      "Classified and mission environments cannot depend on a foreign owned stack with a black box core, no matter how capable it looks on paper.",
    outcome:
      "We build and own our platforms outright and deploy them air gapped or in sovereign cloud when the environment demands it.",
  },
  {
    title: "Vendors sell and disappear, operators do not",
    problem:
      "Most security vendors hand over a framework, a licence key and a support ticket queue, then move on to the next deal.",
    outcome:
      "Our founding team has sat on the other side of that problem, so we stay engaged through consulting, engineering and 24x7 operational support.",
  },
];

const useCases = {
  ConsentTrail: [
    {
      label: "DPDP Act 2023 audit readiness",
      description:
        "Continuous obligation tracking so you can produce evidence for the Data Protection Board on demand, not just before a scheduled audit.",
    },
    {
      label: "DSPM visibility across cloud, email and AI systems",
      description:
        "Live discovery of where personal data actually sits across cloud storage, mailboxes and AI pipelines, not a point in time survey.",
    },
    {
      label: "Unified software, AI and cloud bill of materials",
      description:
        "One ledger tracking every library, model and cloud asset that touches personal data, kept current automatically.",
    },
    {
      label: "Agentic AI gap analysis and auto remediation",
      description:
        "AI agents scan for schema level gaps and propose the fix, instead of waiting on a manual review cycle.",
    },
    {
      label: "Cross border data transfer mapping",
      description:
        "Real time tracking of where data physically moves, flagging transfers outside approved jurisdictions.",
    },
    {
      label: "72 hour CERT-In breach response",
      description:
        "A structured incident workflow that keeps notification and evidence collection inside the mandated window.",
    },
    {
      label: "Consent and DSR management at scale",
      description:
        "Multi lingual consent capture and subject request handling that holds up under enterprise volume.",
    },
  ],
  SilentEye: [
    {
      label: "Missing person and fraud investigation",
      description:
        "Correlate scattered digital traces into a single subject profile in minutes instead of days.",
    },
    {
      label: "Counter terrorism and threat monitoring",
      description:
        "Surface emerging networks and chatter across open sources before they escalate.",
    },
    {
      label: "Financial crime and network mapping",
      description:
        "Trace money and identity links across accounts, aliases and platforms in one view.",
    },
    {
      label: "Digital footprint and identity verification",
      description:
        "Confirm who is really behind a handle, number or account before you act on it.",
    },
    {
      label: "Cross agency case correlation",
      description:
        "Match entities and evidence across cases and jurisdictions that would otherwise stay siloed.",
    },
    {
      label: "Social media and open forum monitoring",
      description:
        "Track public conversation around a subject or event as it happens, across platforms.",
    },
  ],
};

const UseCaseAccordion = ({
  items,
}: {
  items: { label: string; description: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2.5 mt-5">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.label}
            className={
              "rounded-2xl border overflow-hidden transition-colors duration-200 " +
              (isOpen
                ? "border-azure-400/30 bg-white"
                : "border-navy-900/[0.08] bg-white/60")
            }
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
            >
              <span className="text-[14px] font-medium text-navy-900">
                {item.label}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  "w-4 h-4 text-azure-500 shrink-0 transition-transform duration-200 " +
                  (isOpen ? "rotate-45" : "")
                }
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="px-4 pb-4 text-[13px] text-navy-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const ProblemFlipCard = ({
  item,
  delay,
}: {
  item: { title: string; problem: string; outcome: string };
  delay: number;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="h-[300px] sm:h-[270px] [perspective:1200px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") setFlipped((v) => !v);
        }}
        className="relative w-full h-full cursor-pointer [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 panel p-8 flex flex-col [backface-visibility:hidden]">
          <span className="text-xs font-semibold text-azure-500 uppercase tracking-widest">
            Problem
          </span>
          <h3 className="text-lg font-semibold text-navy-900 mt-2">{item.title}</h3>
          <p className="text-[15px] text-navy-500 mt-3 leading-relaxed flex-1">
            {item.problem}
          </p>
          <span className="text-sm font-medium text-azure-500 inline-flex items-center gap-1.5">
            See how we fix it
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <div className="absolute inset-0 panel bg-navy-900 border-none p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-xs font-semibold text-azure-300 uppercase tracking-widest">
            How we fix it
          </span>
          <p className="text-[15px] text-white/80 mt-3 leading-relaxed flex-1">
            {item.outcome}
          </p>
          <span className="text-sm font-medium text-azure-300 inline-flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Back to the problem
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Problems = () => {
  return (
    <section id="solutions" className="relative py-24 bg-gradient-to-b from-azure-50/70 via-white to-white overflow-hidden">
      <div className="glow-blob -top-20 -right-40 w-[550px] h-[550px] bg-azure-200/45" />
      <div className="glow-blob bottom-0 -left-40 w-[450px] h-[450px] bg-azure-300/25" />
      <div className="glow-blob top-1/3 left-1/2 w-[400px] h-[400px] bg-navy-400/10" />
      <div className="container relative">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <div className="tag">What we solve</div>
          </div>
          <h2 className="section-title mt-5">The problems behind the platforms</h2>
          <p className="section-description mt-5">
            Every capability we build traces back to a specific gap we have
            watched teams struggle with firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {problems.map((item, index) => (
            <ProblemFlipCard key={item.title} item={item} delay={(index % 2) * 0.1} />
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {Object.entries(useCases).map(([product, items], groupIndex) => (
            <motion.div
              key={product}
              className="rounded-3xl border border-navy-900/[0.08] bg-azure-50/40 p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-azure-600 px-1">
                {product} use cases
              </h3>
              <UseCaseAccordion items={items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
