'use client'

export function UserManualHero() {
  return (
    <section className="relative pt-48 pb-32 px-4 sm:px-6 lg:px-8 bg-[#05204A] overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080E2] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#45D6A8] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Label */}
        <div className="inline-block mb-8 px-4 py-2 rounded-full bg-[#0080E2]/10 border border-[#0080E2]/30">
          <span className="text-xs font-semibold text-[#0080E2] tracking-widest uppercase">Documentation</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          User Manual & Guide
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#CAF0F8]/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Complete operational guide for Edgkonnect mission-critical Push-to-Talk devices. Learn setup, operation, and maintenance.
        </p>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-[#45D6A8] mb-2">LTE/4G</div>
            <p className="text-sm text-[#CAF0F8]/70 font-medium">Cellular Network</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-[#45D6A8] mb-2">IP68</div>
            <p className="text-sm text-[#CAF0F8]/70 font-medium">Waterproof & Dustproof</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="text-3xl font-bold text-[#45D6A8] mb-2">Critical</div>
            <p className="text-sm text-[#CAF0F8]/70 font-medium">Mission-Ready</p>
          </div>
        </div>
      </div>
    </section>
  )
}
