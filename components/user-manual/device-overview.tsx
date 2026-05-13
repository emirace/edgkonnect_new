export function DeviceOverview() {
  const specifications = [
    { label: "Model", value: "MCPT-1-XC" },
    { label: "Network", value: "LTE / 4G Cellular" },
    { label: "Connectivity", value: "Pre-installed Edgkonnect embedded SIM" },
    { label: "IP Rating", value: "IP68 (Waterproof & Dustproof)" },
    { label: "Charging", value: "USB-C" },
    { label: "Optional Accessories", value: "Earpiece, Desktop Charger" },
    { label: "Design", value: "Complete solution designed for mission-critical operations" },
  ];

  const frontControls = [
    { num: 1, name: "Rotary Knob", function: "Rotate to switch between groups" },
    { num: 2, name: "Antenna", function: "—" },
    { num: 3, name: "Speaker", function: "Built-in speaker for audio output" },
    { num: 4, name: "Microphone", function: "Built-in microphone for voice input" },
    { num: 5, name: "Display", function: "Screen showing status and user information" },
    { num: 6, name: "Power On/Off Key", function: "Hold for 3 seconds to turn on/off. Wakes screen from sleep mode. Sleep timer is 5 minutes by default." },
    { num: 7, name: "User Navigation Keys", function: "Press Up/Down to navigate and select individual users for 1-to-1 calls." },
    { num: 8, name: "Back to Group Call", function: "Returns to group call after a 1-to-1 call." },
  ];

  const sideControls = [
    { num: 9, name: "Earpiece Port", function: "3.5mm port. Connect optional earpiece (sold separately)." },
    { num: 10, name: "Charger Input (USB-C)", function: "USB-C charging port for the device." },
    { num: 11, name: "PTT (Push-to-Talk)", function: "Hold button to start speaking; release when finished." },
    { num: 12, name: "Volume Up", function: "Increases audio volume." },
    { num: 13, name: "Volume Down", function: "Decreases audio volume." },
    { num: 14, name: "SOS Button", function: "Sends SOS alert to App-Based Mobile Dispatcher or Mission Critical Group Communication Windows Dispatcher." },
    { num: 15, name: "Port for Desktop Charger", function: "Desktop charger is an optional accessory, sold separately." },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Device Overview & Specifications
        </h2>

        {/* Specifications Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Key Specifications</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-border ${idx % 2 === 0 ? "bg-background/30" : "bg-background/50"}`}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground w-1/3">{spec.label}</td>
                    <td className="px-6 py-4 text-foreground/90">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Image and Controls */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Device Controls & Functions</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Device Image */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4004-yx2sihNURpsfZIVChkCUPwZH7iOqbP.png"
                alt="Device front view with labeled controls"
                className="w-full max-w-sm"
              />
            </div>

            {/* Front Controls */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold text-foreground mb-4">Front Panel Controls</h4>
              <div className="space-y-3">
                {frontControls.map((control) => (
                  <div key={control.num} className="flex gap-4 p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-semibold flex-shrink-0">
                      {control.num}
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold text-foreground">{control.name}</h5>
                      <p className="text-sm text-foreground/70">{control.function}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Controls */}
        <div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Device Image */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3995-HQmYeu7Bbh5yKzANbBHNwXEDakdRUz.jpeg"
                alt="Device side and bottom views with labeled ports"
                className="w-full max-w-sm"
              />
            </div>

            {/* Side Controls */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold text-foreground mb-4">Side & Port Controls</h4>
              <div className="space-y-3">
                {sideControls.map((control) => (
                  <div key={control.num} className="flex gap-4 p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-semibold flex-shrink-0">
                      {control.num}
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold text-foreground">{control.name}</h5>
                      <p className="text-sm text-foreground/70">{control.function}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
