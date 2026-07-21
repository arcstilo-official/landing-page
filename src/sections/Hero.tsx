"use client";

import { motion } from "framer-motion";
import { NetworkBackground } from "@/components/NetworkBackground";
import { CALENDLY_URL, CONSENTTRAIL_URL } from "@/lib/config";

const stats = [
  { value: "20+", label: "Years of combined defence and cyber experience" },
  { value: "2", label: "Sovereign platforms built and deployed" },
  { value: "100%", label: "Built, owned and hosted in India" },
  { value: "24x7", label: "Support for mission critical operations" },
];

const radarLegend = [
  { label: "Network", angle: 20 },
  { label: "Cloud", angle: 110 },
  { label: "Endpoint", angle: 200 },
  { label: "Open source", angle: 290 },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-50/70 via-white to-white pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 opacity-70">
        <NetworkBackground />
      </div>
      <div className="glow-blob -top-52 left-1/4 w-[700px] h-[700px] bg-azure-300/35" />
      <div className="glow-blob -top-32 right-0 w-[600px] h-[600px] bg-navy-400/20" />
      <div className="glow-blob top-1/2 -left-32 w-[500px] h-[500px] bg-azure-100/50" />

      <div className="container relative">
        <div className="md:flex items-center gap-12">
          <div className="md:w-[560px]">
            <div className="tag">Make in India Cybersecurity OEM</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-navy-900 mt-6 leading-[1.08]">
              Cybersecurity built in India, for those who defend it.
            </h1>
            <p className="text-lg md:text-xl text-navy-500 tracking-tight mt-6">
              We design, own and operate every platform ourselves, then put them
              to work for the defence, law enforcement, government and enterprise
              teams who cannot afford to get security wrong.
            </p>
            <div className="flex flex-wrap gap-3 items-center mt-8">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Book a briefing
              </a>
              <a
                href={CONSENTTRAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Explore ConsentTrail
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-14 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-navy-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-500 mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-0 flex-1 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[32px] border border-navy-900/[0.08] bg-white/70 backdrop-blur-xl shadow-premium p-8 flex items-center justify-center">
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-navy-500">
                <span>Threat surface</span>
                <span className="inline-flex items-center gap-1.5 text-azure-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-azure-400 animate-pulse" />
                  Monitoring
                </span>
              </div>

              <div className="relative w-64 h-64 rounded-full border border-azure-400/25 flex items-center justify-center">
                <div className="absolute inset-6 rounded-full border border-azure-400/25" />
                <div className="absolute inset-14 rounded-full border border-azure-400/25" />

                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(36,182,242,0.35), transparent 35%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />

                <div className="relative w-4 h-4 rounded-full bg-azure-500 shadow-[0_0_0_6px_rgba(36,182,242,0.18)]" />

                {radarLegend.map((item) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const r = 118;
                  const x = 128 + r * Math.cos(rad);
                  const y = 128 + r * Math.sin(rad);
                  return (
                    <div
                      key={item.label}
                      className="absolute flex flex-col items-center gap-1"
                      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-navy-900" />
                      <span className="text-[10px] font-medium text-navy-500 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-center text-xs text-navy-500">
                Unified visibility across infrastructure, endpoints and open sources
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
