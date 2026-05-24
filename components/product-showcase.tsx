"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function ProductShowcase() {
  const features = [
    "Crystal-Clear Audio Communication",
    "IP68 Waterproof & Dustproof",
    "Emergency SOS Functionality",
    "Built-in GPS Tracking",
    "40% More Affordable Solution",
  ];

  return (
    <section id="product" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-6">
            MCPPT-1-XC Complete Solution
          </h2>
          <p className="text-lg text-[#05204A]/70 max-w-2xl mx-auto font-light">
            The most Naira-friendly and effective Push-to-Talk solution designed
            for security, industrial, and mission-critical operations
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image & Info */}
          <div className="flex flex-col items-center">
            <div className="bg-linear-to-br from-[#05204A]/10 to-transparent p-12 rounded-2xl border border-[#05204A]/10 w-full flex items-center justify-center min-h-96">
              <img
                src="/talkie_one.png"
                alt="MCPPT-1-XC Device"
                className="w-full h-auto max-w-sm object-contain"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#05204A] mb-4">
                All-in-One PTT System
              </h3>
              <p className="text-[#05204A]/70 font-light leading-relaxed mb-8">
                Edgkonnect MCPPT-1-XC is engineered to withstand heavy rains,
                floods, and high humidity in Nigeria. Perfect for logistics,
                security, emergency services, oil and gas, government, and more.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#45D6A8]">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[#05204A] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="p-6 rounded-xl bg-[#45D6A8]/10 border border-[#45D6A8]/20">
              <p className="text-[#05204A] font-semibold mb-2">
                🎯 Up to 40% More Affordable
              </p>
              <p className="text-[#05204A]/70 text-sm">
                Enjoy unbeatable pricing without compromising quality. The
                complete PTT solution that won't break your budget.
              </p>
            </div>
          </div>
        </div>

        {/* Ecosystem Overview */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#05204A] mb-12 text-center">
            Complete Ecosystem
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Device",
                desc: "Mission-critical PTT hardware with LTE/4G connectivity",
                icon: "📱",
              },
              {
                title: "Mobile App",
                desc: "Android dispatcher for on-the-go communication",
                icon: "📲",
              },
              {
                title: "Web Admin",
                desc: "Centralized user and group management portal",
                icon: "🖥️",
              },
              {
                title: "Dispatcher",
                desc: "Desktop console for large-scale operations",
                icon: "🎛️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#05204A]/10 hover:border-[#0080E2]/30 hover:bg-[#0080E2]/5 transition-all group"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#05204A] mb-2">{item.title}</h4>
                <p className="text-sm text-[#05204A]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-[#05204A] to-[#0a3d7a] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Complete Solution?
          </h3>
          <p className="text-[#CAF0F8]/80 mb-8 max-w-2xl mx-auto">
            View detailed specifications, features, and technical information
            about the MCPPT-1-XC system and all ecosystem components.
          </p>
          <Link
            href="/product-details"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#45D6A8] text-[#05204A] font-bold rounded-lg hover:bg-[#45D6A8]/90 transition-all group shadow-lg"
          >
            View Full Product Details
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
