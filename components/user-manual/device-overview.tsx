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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
            Device Specifications
          </h2>
          <p className="text-lg text-[#05204A]/70 font-light">
            Complete overview of your PTT device components and specifications
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mb-24">
          <div className="overflow-x-auto rounded-xl border border-[#05204A]/10 shadow-sm bg-gradient-to-br from-[#05204A]/3 to-transparent">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#05204A]/10 hover:bg-[#05204A]/5 transition-colors last:border-b-0"
                  >
                    <td className="px-8 py-5 font-semibold text-[#05204A] w-48 bg-[#05204A]/5">
                      {spec.label}
                    </td>
                    <td className="px-8 py-5 text-[#05204A]/80 font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Controls Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#05204A] mb-8">Front Panel Controls</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Device Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-[#05204A]/10 to-transparent p-8 rounded-xl border border-[#05204A]/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4004-yx2sihNURpsfZIVChkCUPwZH7iOqbP.png"
                  alt="Device front view with labeled controls"
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Front Controls */}
            <div>
              <div className="space-y-4">
                {frontControls.map((control) => (
                  <div key={control.num} className="flex gap-4 p-5 rounded-lg border border-[#05204A]/10 hover:bg-[#05204A]/3 transition-colors bg-white">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold flex-shrink-0 text-sm">
                      {control.num}
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold text-[#05204A] mb-1">{control.name}</h5>
                      <p className="text-sm text-[#05204A]/70 leading-relaxed">{control.function}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Controls Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#05204A] mb-8">Side & Port Controls</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Device Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-[#05204A]/10 to-transparent p-8 rounded-xl border border-[#05204A]/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3995-HQmYeu7Bbh5yKzANbBHNwXEDakdRUz.jpeg"
                  alt="Device side and bottom views with labeled ports"
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Side Controls */}
            <div>
              <div className="space-y-4">
                {sideControls.map((control) => (
                  <div key={control.num} className="flex gap-4 p-5 rounded-lg border border-[#05204A]/10 hover:bg-[#05204A]/3 transition-colors bg-white">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold flex-shrink-0 text-sm">
                      {control.num}
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold text-[#05204A] mb-1">{control.name}</h5>
                      <p className="text-sm text-[#05204A]/70 leading-relaxed">{control.function}</p>
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
