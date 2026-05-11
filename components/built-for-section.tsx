import { Shield, Zap, Eye, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Operational Control",
    description:
      "Maintain complete operational control with real-time communication and monitoring capabilities.",
    color: "from-[#0080E2] to-[#0080E2]/70",
  },
  {
    icon: Target,
    title: "Improved Response Time",
    description:
      "Enhance response coordination with instant communication across teams and locations.",
    color: "from-[#45D6A8] to-[#45D6A8]/70",
  },
  {
    icon: Shield,
    title: "Enhanced Accountability",
    description:
      "Strengthen accountability through comprehensive tracking and surveillance systems.",
    color: "from-[#05204A] to-[#05204A]/70",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description:
      "Monitor teams, vehicles, and field activities from a centralized command system.",
    color: "from-[#0080E2] to-[#45D6A8]",
  },
];

export function BuiltForSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#0080E2]/20 to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#CAF0F8]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#0080E2]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080E2]/5 border border-[#0080E2]/20 mb-6">
            <span className="text-[#0080E2] text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05204A] mb-6 text-balance">
            Built For Operations That Demand{" "}
            <span className="bg-linear-to-r from-[#0080E2] to-[#45D6A8] bg-clip-text text-transparent">
              Speed, Coordination & Control
            </span>
          </h2>
          <p className="text-lg text-[#05204A]/60 max-w-3xl mx-auto leading-relaxed">
            In today&apos;s fast-moving world, communication is no longer just
            about staying connected. It is about maintaining operational
            control, improving response time, enhancing accountability,
            protecting assets, and making smarter decisions in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#0080E2]/30 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-[#0080E2]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#05204A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#05204A]/60 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-linear-to-r from-[#0080E2] to-[#45D6A8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-linear-to-br from-[#05204A] to-[#0a2d5c] relative overflow-hidden">
          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <p className="relative text-white/90 text-center text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
            EdgKonnect empowers organizations with enterprise-grade
            communication and operational intelligence solutions designed for
            high-performance environments where reliability, visibility, and
            rapid coordination are mission-critical.
          </p>
        </div>
      </div>
    </section>
  );
}
