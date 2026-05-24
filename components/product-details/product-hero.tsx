'use client'

export function ProductHero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05204A] via-[#05204A] to-[#0a3d6b] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080E2] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-[#45D6A8] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-[#0080E2]/15 border border-[#0080E2]/30">
                <span className="text-sm font-semibold text-[#45D6A8] tracking-widest uppercase">Complete Solution</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                MCPPT-1-XC
              </h1>
              <p className="text-xl text-[#CAF0F8]/90 leading-relaxed font-light">
                The most Naira-friendly and effective PTT solution designed for security, industrial, and mission-critical operations.
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#45D6A8] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#05204A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#CAF0F8] text-lg">40% MORE AFFORDABLE than competing solutions</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#45D6A8] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#05204A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#CAF0F8] text-lg">Crystal-clear audio communication</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#45D6A8] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#05204A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#CAF0F8] text-lg">Seamless rural area connectivity with eSIM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="px-8 py-4 bg-[#0080E2] text-white rounded-lg font-semibold hover:bg-[#0066b8] transition-colors">
                View Specs
              </button>
              <button className="px-8 py-4 border-2 border-[#45D6A8] text-[#45D6A8] rounded-lg font-semibold hover:bg-[#45D6A8]/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-[#0080E2]/20 to-[#45D6A8]/10 rounded-2xl p-8 border border-white/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4029-xKWZm4FkUPLCjOqR6rk8MeyCINPa9X.png"
                alt="MCPPT-1-XC Device"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
