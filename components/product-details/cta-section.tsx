'use client'

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#05204A] via-[#0a3d6b] to-[#05204A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Deploy?
        </h2>
        <p className="text-xl text-[#CAF0F8]/90 mb-12 leading-relaxed">
          Contact our team to discuss your PTT communication needs and get a customized solution for your organization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-[#0080E2] text-white rounded-lg font-semibold hover:bg-[#0066b8] transition-colors text-lg">
            Request Demo
          </button>
          <button className="px-10 py-4 border-2 border-[#45D6A8] text-[#45D6A8] rounded-lg font-semibold hover:bg-[#45D6A8]/10 transition-colors text-lg">
            Contact Sales
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-[#45D6A8] text-2xl font-bold">+234 906 404 5984</p>
            <p className="text-[#CAF0F8]/70 mt-2">Phone</p>
          </div>
          <div>
            <p className="text-[#45D6A8] text-2xl font-bold">edgkonnect.com</p>
            <p className="text-[#CAF0F8]/70 mt-2">Website</p>
          </div>
          <div>
            <p className="text-[#45D6A8] text-2xl font-bold">info@edgkonnect.com</p>
            <p className="text-[#CAF0F8]/70 mt-2">Email</p>
          </div>
        </div>
      </div>
    </section>
  )
}
