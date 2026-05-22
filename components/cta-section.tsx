import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#05204A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0080E2]/20 via-transparent to-[#45D6A8]/20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#45D6A8]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0080E2]/50 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#45D6A8]/10 border border-[#45D6A8]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#45D6A8] animate-pulse" />
          <span className="text-[#45D6A8] text-sm font-medium">Get Started Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CAF0F8] mb-6 text-balance">
          Ready To Modernize Your Communication &{" "}
          <span className="text-[#45D6A8]">Operations Infrastructure?</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-[#CAF0F8]/70 mb-10 max-w-2xl mx-auto">
          Empower your organization with intelligent communication, tracking, monitoring, and operational visibility solutions built for modern operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#45D6A8] text-[#05204A] hover:bg-[#45D6A8]/90 font-semibold text-base px-8 h-14 group">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-[#0080E2] text-[#CAF0F8] hover:bg-[#0080E2]/10 font-semibold text-base px-8 h-14">
            <Play className="mr-2 h-5 w-5" />
            Request a Product Demo
          </Button>
          <Button size="lg" variant="ghost" className="text-[#CAF0F8] hover:text-[#45D6A8] hover:bg-[#45D6A8]/10 font-semibold text-base px-8 h-14">
            <MessageSquare className="mr-2 h-5 w-5" />
            Speak With Our Team
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-[#1a4a7a]">
          <p className="text-[#CAF0F8]/40 text-sm mb-6">Trusted by leading organizations across Nigeria</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-8 bg-[#CAF0F8]/10 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
