'use client'

const accessories = {
  standard: [
    'Battery (3500 mAh)',
    'Charger with Type-C cable',
    'Belt clip'
  ],
  optional: [
    'Earphone (3.5mm)',
    'Dock station',
    'Desktop charger'
  ]
}

export function Accessories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
            Accessories
          </h2>
          <p className="text-xl text-[#05204A]/70 font-light">
            Expand your device capabilities with optional accessories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Standard Accessories */}
          <div className="p-10 rounded-xl border-2 border-[#0080E2] bg-gradient-to-br from-[#0080E2]/10 to-transparent">
            <h3 className="text-2xl font-bold text-[#05204A] mb-6">Standard Accessories</h3>
            <ul className="space-y-4">
              {accessories.standard.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0080E2] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#05204A] font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Accessories */}
          <div className="p-10 rounded-xl border-2 border-[#45D6A8] bg-gradient-to-br from-[#45D6A8]/10 to-transparent">
            <h3 className="text-2xl font-bold text-[#05204A] mb-6">Optional Accessories</h3>
            <ul className="space-y-4">
              {accessories.optional.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#45D6A8] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#05204A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#05204A] font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
