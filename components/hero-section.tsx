"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Radio, MapPin, Camera } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#05204A]/90" />
        <div className="absolute inset-0 bg-linear-to-br from-[#0080E2]/20 via-transparent to-[#45D6A8]/10" />
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-[#0080E2]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-48 w-[600px] h-[600px] bg-[#45D6A8]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30 mb-8">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-[#45D6A8]" />
                <div className="w-2 h-2 rounded-full bg-[#0080E2]" />
                <div className="w-2 h-2 rounded-full bg-[#CAF0F8]" />
              </div>
              <span className="text-[#CAF0F8] text-sm font-medium">
                Nigerian Technology Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#CAF0F8] leading-[1.1] mb-6 tracking-tight">
              <span className="block">Real-Time</span>
              <span className="block text-[#45D6A8]">Communication.</span>
              <span className="block mt-2 text-[#0080E2]">Total Control.</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#CAF0F8]/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mission-critical PTT systems, GPS fleet tracking, and body-worn
              cameras for organizations that cannot afford communication
              failure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#45D6A8] text-[#05204A] hover:bg-[#45D6A8]/90 font-semibold text-base px-8 h-14 rounded-xl group shadow-lg shadow-[#45D6A8]/20"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1a4a7a] bg-[#05204A]/50 text-[#CAF0F8] hover:bg-[#0080E2]/10 hover:border-[#0080E2] font-semibold text-base px-8 h-14 rounded-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-10 border-t border-[#1a4a7a]/50 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#45D6A8]/10 flex items-center justify-center">
                  <span className="text-[#45D6A8] font-bold">99.9%</span>
                </div>
                <span className="text-sm text-[#CAF0F8]/60">Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#0080E2]/10 flex items-center justify-center">
                  <span className="text-[#0080E2] font-bold">50K+</span>
                </div>
                <span className="text-sm text-[#CAF0F8]/60">Devices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#CAF0F8]/10 flex items-center justify-center">
                  <span className="text-[#CAF0F8] font-bold">24/7</span>
                </div>
                <span className="text-sm text-[#CAF0F8]/60">Support</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Product Showcase */}
          <div className="relative">
            {/* Main Product Image */}
            <div className="relative group">
              {/* Enhanced Background Glow */}
              <div className="absolute -inset-10 bg-linear-to-r from-[#0080E2]/30 via-[#45D6A8]/20 to-[#0080E2]/30 rounded-full blur-3xl opacity-70 animate-pulse-slow" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,128,226,0.2)] transition-transform duration-500 hover:scale-[1.02]">
                {/* Radial Mask for Soft Edges */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, transparent 30%, #05204A 120%)",
                    opacity: 0.4,
                  }}
                />
                <img
                  src="/images/hero-img.png"
                  alt="EdgKonnect Products - Walkie-Talkie, Body Camera, and Car Tracker"
                  className="w-full h-auto relative z-0"
                />
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -left-4 md:-left-8 p-4 rounded-xl bg-[#05204A]/95 border border-[#1a4a7a] shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#45D6A8]/20 flex items-center justify-center">
                  <Radio className="w-5 h-5 text-[#45D6A8]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#CAF0F8]">
                    PTT Radio
                  </div>
                  <div className="text-xs text-[#CAF0F8]/60">
                    Instant Connect
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-right-8 p-4 rounded-xl bg-[#05204A]/95 border border-[#1a4a7a] shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080E2]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0080E2]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#CAF0F8]">
                    GPS Tracking
                  </div>
                  <div className="text-xs text-[#CAF0F8]/60">
                    Real-time Location
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 p-4 rounded-xl bg-[#05204A]/95 border border-[#1a4a7a] shadow-xl backdrop-blur-sm hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#CAF0F8]/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#CAF0F8]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#CAF0F8]">
                    Body Cam
                  </div>
                  <div className="text-xs text-[#CAF0F8]/60">HD Recording</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#1a4a7a]/30 rounded-full" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-[#1a4a7a]/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#05204A] to-transparent" />
    </section>
  );
}
