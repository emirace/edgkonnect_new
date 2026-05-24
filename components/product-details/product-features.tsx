'use client'

const features = [
  {
    icon: '🔒',
    title: 'Secure & Encrypted',
    description: 'Military-grade encryption for all communications'
  },
  {
    icon: '📞',
    title: 'Instant Connectivity',
    description: 'One-click calling and conference capabilities'
  },
  {
    icon: '📡',
    title: 'Connectivity Included',
    description: 'Pre-installed eSIM (No local SIM required)'
  },
  {
    icon: '🚨',
    title: 'Emergency SOS',
    description: 'Panic button for critical situations'
  },
  {
    icon: '👥',
    title: 'Multi-User Support',
    description: 'One-to-one and one-to-group calls'
  },
  {
    icon: '📍',
    title: 'GPS Tracking',
    description: 'Embedded GPS for tracking and geofencing'
  }
]

export function ProductFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
            Key Features
          </h2>
          <p className="text-xl text-[#05204A]/70 font-light max-w-3xl mx-auto">
            Powerful capabilities designed for mission-critical communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-[#05204A]/10 hover:border-[#0080E2]/30 hover:bg-[#05204A]/3 transition-all group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#05204A] mb-2 group-hover:text-[#0080E2] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#05204A]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
