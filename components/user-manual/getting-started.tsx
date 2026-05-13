export function GettingStarted() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Getting Started
        </h2>

        {/* Important Note */}
        <div className="mb-12 p-6 rounded-lg border-2 border-primary bg-primary/10">
          <h3 className="text-lg font-bold text-foreground mb-2">Important Note</h3>
          <p className="text-foreground/90">
            Do NOT insert a SIM card into the device. The Edgkonnect communication system comes with a pre-installed embedded SIM providing connectivity out of the box.
          </p>
        </div>

        {/* Step 1: Attaching Antenna */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg">1</div>
            <h3 className="text-2xl font-bold text-foreground">Attaching the Antenna</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-foreground/90">
                  Align the bottom of the antenna with the screw-in base on top of the PTT device.
                </li>
                <li className="text-foreground/90">
                  Turn clockwise until snug. Do not force the antenna.
                </li>
              </ol>
            </div>
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71c9f8c6-3ab7-4bfb-9712-942593990a20-ch3QNKlZlaxi4op3zJTEO7c6xXcMyl.jpeg"
                alt="Attaching antenna illustration"
                className="max-w-sm w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Charging */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg">2</div>
            <h3 className="text-2xl font-bold text-foreground">Charging the Device</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-foreground/90">
                Some Edgkonnect PTT units come pre-charged. However, if your device is not pre-charged:
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-foreground/90">
                  Plug the USB-C charging cable into the USB-C port on the device.
                </li>
                <li className="text-foreground/90">
                  Alternatively, you can charge the device using a desktop charger (sold separately).
                </li>
              </ol>
              <p className="text-sm text-foreground/70 mt-4 font-semibold">
                For optimal performance, charge for at least 30 minutes before first use.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4005-LYEkPRfkHv8KMFViHjipTaLEZ4MslX.png"
                alt="Charging cable illustration"
                className="max-w-sm w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Powering On */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg">3</div>
            <h3 className="text-2xl font-bold text-foreground">Getting Started – Powering On</h3>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card/50">
              <h4 className="font-bold text-foreground mb-3">Initial Setup</h4>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-foreground/90">
                  Hold the Power button for 3 seconds to turn on the device.
                </li>
                <li className="text-foreground/90">
                  The device will boot up and connect to the LTE network.
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card/50">
              <h4 className="font-bold text-foreground mb-3">Optimal Operation</h4>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-foreground/90">
                  Hold the PTT device with the microphone approximately 10 centimeters away from your mouth when speaking for optimal audio clarity.
                </li>
                <li className="text-foreground/90">
                  Press the PTT button to initiate a call.
                </li>
                <li className="text-foreground/90">
                  Listen via the PTT speaker or earphone (if connected).
                </li>
                <li className="text-foreground/90">
                  In a noisy environment, speak directly into the microphone or move the PTT closer to your mouth for better communication.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
