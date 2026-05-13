'use client'

export function GettingStarted() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05204A]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Getting Started
          </h2>
          <p className="text-lg text-[#CAF0F8]/80 font-light">
            Setup your PTT device in three simple steps
          </p>
        </div>

        {/* Important Note - Alert Box */}
        <div className="mb-20 p-6 sm:p-8 rounded-xl border-2 border-[#45D6A8] bg-[#45D6A8]/10 backdrop-blur-sm">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#45D6A8] text-[#05204A]">
                <span className="text-lg font-bold">!</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Important Note</h3>
              <p className="text-[#CAF0F8]/90 leading-relaxed">
                Do NOT insert a SIM card into the device. Your Edgkonnect PTT system comes with a pre-installed embedded SIM providing full connectivity out of the box.
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Attaching Antenna */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold text-xl flex-shrink-0">
              1
            </div>
            <h3 className="text-3xl font-bold text-white">Attaching the Antenna</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    1
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Align the bottom of the antenna with the screw-in base on top of the PTT device.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    2
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Turn clockwise until snug. Do not force the antenna.
                  </span>
                </li>
              </ol>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-xl border border-white/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71c9f8c6-3ab7-4bfb-9712-942593990a20-ch3QNKlZlaxi4op3zJTEO7c6xXcMyl.jpeg"
                  alt="Attaching antenna illustration"
                  className="max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Charging */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold text-xl flex-shrink-0">
              2
            </div>
            <h3 className="text-3xl font-bold text-white">Charging the Device</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#CAF0F8]/90 leading-relaxed">
                Some Edgkonnect PTT units come pre-charged. However, if your device is not pre-charged:
              </p>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    1
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Plug the USB-C charging cable into the USB-C port on the device.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    2
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Alternatively, use a desktop charger (sold separately).
                  </span>
                </li>
              </ol>
              <p className="text-sm text-[#CAF0F8]/70 mt-4 font-medium italic border-l-2 border-[#45D6A8] pl-4">
                For optimal performance, charge for at least 30 minutes before first use.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-xl border border-white/10 flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔌</div>
                  <p className="text-[#CAF0F8]/70">USB-C Charging Port</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Powering On */}
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold text-xl flex-shrink-0">
              3
            </div>
            <h3 className="text-3xl font-bold text-white">Getting Started – Powering On</h3>
          </div>
          
          <div className="space-y-8">
            {/* Initial Setup Box */}
            <div className="p-8 rounded-xl border border-white/10 bg-white/5">
              <h4 className="font-bold text-white mb-6 text-lg">Initial Setup</h4>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    1
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Hold the power button for 3 seconds to turn on the device.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    2
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Wait for the device to initialize and connect to the network.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-semibold flex-shrink-0 text-sm">
                    3
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    You&apos;re ready to communicate!
                  </span>
                </li>
              </ol>
            </div>

            {/* Optimal Operation Box */}
            <div className="p-8 rounded-xl border border-[#45D6A8]/30 bg-[#45D6A8]/5">
              <h4 className="font-bold text-white mb-6 text-lg">Optimal Operation</h4>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45D6A8]/30 text-[#45D6A8] font-semibold flex-shrink-0 text-sm">
                    1
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Hold the PTT with the microphone approximately 10 centimeters away from your mouth.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45D6A8]/30 text-[#45D6A8] font-semibold flex-shrink-0 text-sm">
                    2
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Press the PTT button to initiate a call.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45D6A8]/30 text-[#45D6A8] font-semibold flex-shrink-0 text-sm">
                    3
                  </span>
                  <span className="text-[#CAF0F8]/90 pt-1 leading-relaxed">
                    Speak clearly at normal volume for best audio clarity.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
