'use client'

const specs = [
  { label: 'Dimension', value: '160 x 58 x 23 mm' },
  { label: 'Waterproof Rating', value: 'IP68' },
  { label: 'Operating System', value: 'Android 8.0 (Go)' },
  { label: 'Network', value: 'GSM: B8, WCDMA: B8, LTE: FDD B1/3/5/8, TDD B38/40/41' },
  { label: 'Built-in Memory', value: '1GB RAM + 8GB ROM' },
  { label: 'Display Size', value: '3.5" x 4.2 mm' },
  { label: 'WiFi', value: '2.4GHz IEEE 802.11a/b/g/n' },
  { label: 'Bluetooth', value: 'BLE 4.0, 3.0 + HS, 2.1 + EDR' },
  { label: 'GPS/Location', value: 'GPS / AGPS with GNSS antenna support' },
  { label: 'Charging', value: 'Type-C USB 2.0' },
  { label: 'Earphone Interface', value: '3.5mm standard' },
  { label: 'Speaker', value: '36 mm, 1.5W' },
  { label: 'Microphone', value: 'Single Mic' },
  { label: 'Battery Capacity', value: '3500 mAh, replaceable' },
  { label: 'Battery Charging', value: '5V-1A charger' }
]

export function TechnicalSpecs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05204A] to-[#0a3d6b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-[#CAF0F8]/80 font-light">
            Complete hardware and connectivity details
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/20">
          <table className="w-full">
            <tbody>
              {specs.map((spec, idx) => (
                <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors last:border-b-0">
                  <td className="px-8 py-5 font-semibold text-white bg-white/5 w-1/3">
                    {spec.label}
                  </td>
                  <td className="px-8 py-5 text-[#CAF0F8]/90">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
