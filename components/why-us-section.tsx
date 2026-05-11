import { Shield, Globe, Eye, Building2, Brain, Lock } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Mission-Critical Reliability",
    description: "Our solutions are built for environments where communication delays and visibility gaps are unacceptable."
  },
  {
    icon: Globe,
    title: "Nationwide & Global Connectivity",
    description: "Communicate seamlessly across cities, states, countries, operational sites, and remote locations."
  },
  {
    icon: Eye,
    title: "Real-Time Operational Visibility",
    description: "Monitor teams, vehicles, field activities, and operational movements from a centralized system."
  },
  {
    icon: Building2,
    title: "Enterprise-Ready Infrastructure",
    description: "Scalable communication and monitoring solutions designed for organizations of all sizes — from private enterprises to government institutions."
  },
  {
    icon: Brain,
    title: "Operational Intelligence",
    description: "Beyond communication, we provide real-time visibility and actionable operational insights that improve decision-making."
  },
  {
    icon: Lock,
    title: "Secure & Scalable Technology",
    description: "Reliable communication infrastructure built to support modern operational demands."
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#05204A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#45D6A8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080E2]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30 mb-6">
            <span className="text-[#0080E2] text-sm font-medium">Why EdgKonnect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CAF0F8] mb-6 text-balance">
            Why Organizations, Governments &{" "}
            <span className="text-[#45D6A8]">Enterprises Choose EdgKonnect</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#0a2d5c]/50 to-transparent border border-[#1a4a7a] hover:border-[#45D6A8]/40 transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-[#1a4a7a]/30 group-hover:text-[#45D6A8]/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#45D6A8]/20 to-[#0080E2]/20 flex items-center justify-center mb-6 group-hover:from-[#45D6A8]/30 group-hover:to-[#0080E2]/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-[#45D6A8]" />
                </div>
                <h3 className="text-xl font-semibold text-[#CAF0F8] mb-3">{reason.title}</h3>
                <p className="text-[#CAF0F8]/60 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
