import {
  Truck,
  Shield,
  Building,
  Landmark,
  Fuel,
  HardHat,
  Siren,
  Plane,
  Factory,
  Mountain,
  Hotel,
  Users,
  Wrench,
  Heart,
} from "lucide-react";

const industries = [
  { icon: Truck, name: "Logistics & Transportation", color: "#0080E2" },
  { icon: Shield, name: "Security Companies", color: "#45D6A8" },
  { icon: Building, name: "Government Agencies", color: "#05204A" },
  { icon: Landmark, name: "State & Public Sector", color: "#0080E2" },
  { icon: Fuel, name: "Oil & Gas", color: "#45D6A8" },
  { icon: HardHat, name: "Construction", color: "#05204A" },
  { icon: Siren, name: "Emergency Response", color: "#0080E2" },
  { icon: Plane, name: "Aviation & Maritime", color: "#45D6A8" },
  { icon: Factory, name: "Manufacturing", color: "#05204A" },
  { icon: Mountain, name: "Mining Operations", color: "#0080E2" },
  { icon: Hotel, name: "Hospitality & Facilities", color: "#45D6A8" },
  { icon: Users, name: "Community Surveillance", color: "#05204A" },
  { icon: Wrench, name: "Industrial Operations", color: "#0080E2" },
  { icon: Heart, name: "Healthcare & Field Services", color: "#45D6A8" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #05204A 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#45D6A8]/10 border border-[#45D6A8]/30 mb-6">
            <span className="text-[#45D6A8] text-sm font-semibold">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05204A] mb-6">
            Powering Communication Across{" "}
            <span className="bg-linear-to-r from-[#0080E2] to-[#45D6A8] bg-clip-text text-transparent">
              Critical Industries
            </span>
          </h2>
          <p className="text-[#05204A]/60 max-w-2xl mx-auto text-lg">
            EdgKonnect serves organizations, governments, institutions, states,
            communities, and enterprises operating in demanding environments
            where coordination, accountability, and rapid communication are
            essential.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent shadow-md shadow-gray-100/50 hover:shadow-xl hover:shadow-[#0080E2]/10 transition-all duration-300 aspect-square cursor-pointer hover:-translate-y-1"
              style={
                {
                  "--hover-color": industry.color,
                } as React.CSSProperties
              }
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 bg-gray-50 group-hover:shadow-lg"
                style={{
                  backgroundColor: "rgb(249 250 251)",
                }}
              >
                <industry.icon
                  className="w-6 h-6 md:w-7 md:h-7 transition-colors"
                  style={{ color: industry.color }}
                />
              </div>
              <span className="text-[#05204A]/80 text-xs md:text-sm text-center font-medium leading-tight group-hover:text-[#05204A]">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-linear-to-r from-[#0080E2] to-[#45D6A8] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
              backgroundSize: "200% 200%",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Don&apos;t see your industry?
              </h3>
              <p className="text-white/80">
                Our solutions adapt to any environment requiring reliable
                communication.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white text-[#05204A] font-semibold hover:bg-white/90 transition-colors shadow-xl shrink-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
