"use client";

import { NetworkBackground } from "@/components/NetworkBackground";
import { CALENDLY_URL, PARTNER_EMAIL, SUPPORT_EMAIL } from "@/lib/config";

const contactChannels = [
  {
    title: "Technical support",
    description: "For existing customers running ConsentTrail or SilentEye.",
    email: SUPPORT_EMAIL,
  },
  {
    title: "Partnerships and enterprise",
    description: "For new deployments, OEM partnerships and government inquiries.",
    email: PARTNER_EMAIL,
  },
];

export const CallToAction = () => {
  return (
    <section id="contact" className="relative bg-navy-900 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <NetworkBackground color="rgba(117, 228, 255, 0.5)" lineColor="117, 228, 255" />
      </div>
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-azure-600/30 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="tag !bg-white/10 !border-white/20 !text-azure-200">
              Talk to the platform team
            </div>
            <h2 className="text-3xl md:text-[44px] md:leading-[50px] font-bold tracking-tight text-white mt-6">
              Ready to see it running in your environment?
            </h2>
            <p className="text-white/70 text-lg mt-5 max-w-lg leading-relaxed">
              Book time with our platform team for a walkthrough of ConsentTrail
              or SilentEye, scoped to your sector and deployment model.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Book a briefing
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                className="rounded-2xl border border-white/[0.12] bg-white/5 backdrop-blur-xl p-7"
              >
                <h3 className="text-white font-semibold text-lg">
                  {channel.title}
                </h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="inline-block mt-5 text-azure-300 font-medium hover:text-azure-200 transition-colors"
                >
                  {channel.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
