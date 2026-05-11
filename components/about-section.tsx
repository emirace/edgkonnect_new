import { Check } from "lucide-react";

const capabilities = [
  "Push-to-Talk communication systems",
  "LTE walkie-talkie solutions",
  "GPS tracking systems",
  "Vehicle tracking solutions",
  "Fleet management technology",
  "Body-worn camera systems",
  "Dispatch communication platforms",
  "Real-time operational monitoring tools",
  "Security communication systems",
  "Nationwide communication infrastructure",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#05204A]">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-linear-to-l from-[#0080E2]/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30 mb-6">
              <span className="text-[#0080E2] text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CAF0F8] mb-6 text-balance">
              Smarter Communication.{" "}
              <span className="text-[#45D6A8]">Faster Decisions.</span> Better
              Operations.
            </h2>

            <p className="text-[#CAF0F8]/70 text-lg mb-6 leading-relaxed">
              Modern operations require more than traditional communication
              tools. EdgKonnect combines real-time Push-to-Talk communication
              systems, GPS fleet tracking technology, body-worn surveillance
              solutions, and operational intelligence platforms.
            </p>

            <p className="text-[#CAF0F8]/70 mb-8 leading-relaxed">
              Whether managing a transportation fleet, securing public
              infrastructure, coordinating field teams, monitoring state
              operations, or improving emergency response systems, EdgKonnect
              provides the communication and visibility infrastructure needed to
              operate with speed, clarity, and confidence.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-2 flex items-center justify-center border border-[#1a4a7a]">
                <img
                  src="/logo.png"
                  alt="EdgKonnect"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-[#CAF0F8] font-semibold">EdgKonnect</div>
                <div className="text-[#CAF0F8]/60 text-sm">
                  Powering Mission-Critical Operations
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#0080E2]/10 to-[#45D6A8]/10 rounded-3xl" />
            <div className="relative p-8 md:p-10 rounded-3xl border border-[#1a4a7a]">
              <h3 className="text-xl font-semibold text-[#CAF0F8] mb-6">
                Our solutions are trusted by organizations seeking:
              </h3>
              <div className="grid gap-4">
                {capabilities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#45D6A8]/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#45D6A8]" />
                    </div>
                    <span className="text-[#CAF0F8]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
