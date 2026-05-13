'use client'

export function Maintenance() {
  const precautions = [
    {
      topic: "Temperature",
      guidance:
        "Never leave your Edgkonnect PTT device or its battery in extreme temperatures (above +85°C), such as behind a windscreen in direct sunlight.",
      icon: "🌡️",
    },
    {
      topic: "Cleaning",
      guidance:
        "To clean your device, use a moistened or antistatic cloth. Do not use solvents or abrasive cleaners.",
      icon: "🧹",
    },
    {
      topic: "Water Resistance",
      guidance:
        "The device carries an IP68 rating, meaning it is waterproof and dustproof under standard testing conditions. Avoid exposing charging ports to water.",
      icon: "💧",
    },
    {
      topic: "SIM Card",
      guidance:
        "Do NOT insert a third-party SIM card. The device uses a pre-installed Edgkonnect embedded SIM. Inserting a SIM may damage the device and void the warranty.",
      icon: "🚫",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05204A]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Battery, Storage & Maintenance
          </h2>
          <p className="text-lg text-[#CAF0F8]/80 font-light">
            Extend device lifespan and maintain optimal performance
          </p>
        </div>

        {/* Battery & Screen Management */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-8">Battery & Screen Management</h3>
          <div className="p-8 rounded-xl border border-[#45D6A8]/30 bg-[#45D6A8]/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#45D6A8] mb-4">Screen Sleep Mode</h4>
                <p className="text-[#CAF0F8]/90 leading-relaxed mb-4">
                  The PTT device screen will automatically go to sleep mode after 5 minutes of inactivity. This helps conserve battery power and extend operational hours.
                </p>
                <ul className="space-y-2 text-[#CAF0F8]/80 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#45D6A8]">✓</span>
                    <span>Press power button to wake the screen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#45D6A8]">✓</span>
                    <span>Device remains fully operational with screen off</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#45D6A8]">✓</span>
                    <span>Significantly extends battery life</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔋</div>
                  <p className="text-[#CAF0F8]/70">Optimized Battery Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Storage & Environmental Precautions */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-8">Storage & Environmental Precautions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {precautions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/10 hover:border-[#45D6A8]/30 bg-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2">{item.topic}</h4>
                    <p className="text-[#CAF0F8]/80 leading-relaxed text-sm">
                      {item.guidance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care Instructions */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Daily Care Instructions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#0080E2]/30 bg-[#0080E2]/10">
              <h4 className="text-lg font-semibold text-[#0080E2] mb-4">Handling</h4>
              <ul className="space-y-3 text-[#CAF0F8]/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#0080E2] font-bold">•</span>
                  <span>Handle with care to avoid drops</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0080E2] font-bold">•</span>
                  <span>Use protective case when not in use</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0080E2] font-bold">•</span>
                  <span>Avoid impact with hard surfaces</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-[#45D6A8]/30 bg-[#45D6A8]/10">
              <h4 className="text-lg font-semibold text-[#45D6A8] mb-4">Storage</h4>
              <ul className="space-y-3 text-[#CAF0F8]/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#45D6A8] font-bold">•</span>
                  <span>Store in cool, dry environment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#45D6A8] font-bold">•</span>
                  <span>Charge monthly to maintain battery health</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#45D6A8] font-bold">•</span>
                  <span>Keep away from moisture</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-[#CAF0F8]/30 bg-[#CAF0F8]/10">
              <h4 className="text-lg font-semibold text-[#CAF0F8] mb-4">Cleaning</h4>
              <ul className="space-y-3 text-[#CAF0F8]/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#CAF0F8] font-bold">•</span>
                  <span>Use soft, damp cloth only</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CAF0F8] font-bold">•</span>
                  <span>Never use harsh chemicals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CAF0F8] font-bold">•</span>
                  <span>Dry thoroughly after cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
