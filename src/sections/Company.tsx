"use client";

import { motion } from "framer-motion";
import { NetworkBackground } from "@/components/NetworkBackground";

const principles = [
  {
    title: "Own it",
    description: "We do not resell someone else's platform with a new coat of paint.",
  },
  {
    title: "Prove it",
    description: "Every capability ships first where failure is genuinely not an option.",
  },
  {
    title: "Defend it",
    description: "We stay engaged long after the contract is signed, not just through the demo.",
  },
];

export const Company = () => {
  return (
    <section id="company" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-35">
        <NetworkBackground color="rgba(117, 228, 255, 0.4)" lineColor="117, 228, 255" />
      </div>
      <div className="glow-blob top-1/4 -right-40 w-[500px] h-[500px] bg-azure-600/25" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="tag-dark">Why we exist</div>
            <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tight text-white mt-5">
              We built what we once needed and could not find
            </h2>
            <p className="text-white/60 text-lg mt-6 leading-relaxed">
              Arcstilo exists because the people defending India&apos;s most
              sensitive systems kept being handed tools built for someone
              else&apos;s threat model, in someone else&apos;s country, supported
              on someone else&apos;s timezone.
            </p>
            <p className="text-white/60 text-lg mt-4 leading-relaxed">
              So we build every platform ourselves, prove it in environments
              that cannot tolerate failure, and carry that same standard into
              every deployment we ship, whether the customer is a government
              agency or a regulated enterprise.
            </p>
            <p className="text-azure-300 text-lg font-semibold mt-6">
              Make in India, for the world.
            </p>
          </motion.div>

          <motion.div
            className="panel-dark p-8 md:p-10 bg-gradient-to-br from-white/[0.08] to-azure-600/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xl md:text-2xl font-medium leading-snug text-white">
              We build the platforms we would want to be defended by.
            </p>
            <div className="flex flex-col gap-6 mt-10 pt-8 border-t border-white/[0.15]">
              {principles.map((principle) => (
                <div key={principle.title} className="flex items-baseline gap-4">
                  <span className="text-lg font-bold text-azure-300 shrink-0 w-24">
                    {principle.title}
                  </span>
                  <span className="text-sm text-white/70 leading-relaxed">
                    {principle.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
