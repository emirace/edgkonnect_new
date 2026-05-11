"use client";

import { useState } from "react";
import { Radio, MapPin, Camera, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "ptt",
    icon: Radio,
    title: "Push-to-Talk Communication Systems",
    shortTitle: "Push-to-Talk",
    description:
      "Advanced LTE and Wi-Fi enabled walkie-talkie communication systems designed for instant nationwide and global communication without traditional radio limitations.",
    image: "/products/talk.png",
    color: "#0080E2",
    features: [
      "Nationwide & global coverage",
      "Crystal-clear audio communication",
      "One-to-one & group communication",
      "GPS-enabled tracking",
      "Emergency SOS alerts",
      "Wi-Fi & 4G connectivity",
      "Long battery performance",
      "Centralized dispatch integration",
    ],
    idealFor: [
      "Security operations",
      "Transportation companies",
      "Logistics fleets",
      "Government agencies",
      "Emergency response teams",
      "Construction projects",
      "Industrial operations",
      "Community communication networks",
    ],
  },
  {
    id: "gps",
    icon: MapPin,
    title: "GPS Fleet Tracking & Telematics",
    shortTitle: "GPS Tracking",
    description:
      "Intelligent real-time fleet visibility systems designed to improve vehicle monitoring, operational efficiency, route management, and driver accountability.",
    image: "/products/gps.png",
    color: "#45D6A8",
    features: [
      "Live GPS tracking",
      "Route optimization",
      "Driver behavior monitoring",
      "Geofencing",
      "Fuel monitoring integration",
      "Fleet analytics dashboard",
      "Vehicle immobilization support",
      "Operational reporting",
    ],
    benefits: [
      "Reduce operational costs",
      "Improve fleet accountability",
      "Enhance asset security",
      "Increase operational efficiency",
      "Improve response coordination",
    ],
  },
  {
    id: "camera",
    icon: Camera,
    title: "Body-Worn Camera Solutions",
    shortTitle: "Body Cameras",
    description:
      "Professional-grade body camera technology designed for security agencies, field personnel, law enforcement, operational teams, and public safety environments.",
    image: "/products/cam.jpeg",
    color: "#05204A",
    features: [
      "HD video recording",
      "Night vision capability",
      "Long battery life",
      "GPS functionality",
      "Secure evidence storage",
      "Cloud management integration",
      "Real-time operational accountability",
    ],
    applications: [
      "Security operations",
      "Incident documentation",
      "Law enforcement",
      "Public safety",
      "Field workforce accountability",
      "Community surveillance operations",
    ],
  },
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("ptt");
  const activeSolution = solutions.find((s) => s.id === activeTab)!;

  return (
    <section
      id="solutions"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#0080E2]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#45D6A8]/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#45D6A8]/10 border border-[#45D6A8]/30 mb-6">
            <span className="text-[#45D6A8] text-sm font-semibold">
              Our Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05204A] mb-6">
            Intelligent Communication &{" "}
            <span className="bg-linear-to-r from-[#0080E2] to-[#45D6A8] bg-clip-text text-transparent">
              Visibility Solutions
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === solution.id
                  ? "bg-[#05204A] text-white shadow-xl shadow-[#05204A]/20"
                  : "bg-gray-50 border border-gray-200 text-[#05204A] hover:border-[#0080E2]/50 hover:bg-[#0080E2]/5"
              }`}
            >
              <solution.icon
                className={`w-5 h-5 ${activeTab === solution.id ? "text-[#45D6A8]" : ""}`}
              />
              <span className="hidden sm:inline">{solution.shortTitle}</span>
              <span className="sm:hidden">{solution.id.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Product Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Solution Badge */}
            <div
              className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-xl"
              style={{
                borderLeftColor: activeSolution.color,
                borderLeftWidth: "4px",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: activeSolution.color }}
                >
                  <activeSolution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#05204A]">
                    {activeSolution.shortTitle}
                  </div>
                  <div className="text-xs text-[#05204A]/50">
                    Active Solution
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Benefits */}
          <div className="space-y-6">
            {/* Description Card */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#05204A] mb-3">
                {activeSolution.title}
              </h3>
              <p className="text-[#05204A]/70 leading-relaxed">
                {activeSolution.description}
              </p>
            </div>

            {/* Features */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-100/50">
              <h4 className="text-lg font-bold text-[#0080E2] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0080E2]" />
                Key Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeSolution.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#0080E2]/5 transition-colors"
                  >
                    <Check className="w-4 h-4 text-[#0080E2] shrink-0" />
                    <span className="text-[#05204A]/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For / Benefits / Applications */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-[#05204A] to-[#0a2d5c] text-white">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#45D6A8]" />
                {activeSolution.id === "ptt"
                  ? "Ideal For"
                  : activeSolution.id === "gps"
                    ? "Key Benefits"
                    : "Applications"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(activeSolution.id === "ptt"
                  ? activeSolution.idealFor
                  : activeSolution.id === "gps"
                    ? activeSolution.benefits
                    : activeSolution.applications
                )?.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {/* <Button className="w-full h-14 bg-[#0080E2] hover:bg-[#0080E2]/90 text-white font-semibold shadow-xl shadow-[#0080E2]/25 rounded-xl group">
              Learn More About {activeSolution.shortTitle}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
