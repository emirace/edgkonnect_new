export function Maintenance() {
  const precautions = [
    {
      topic: "Temperature",
      guidance:
        "Never leave your Edgkonnect MCPT-1-XC or its battery in extreme temperatures (above +85°C), such as behind a windscreen in direct sunlight.",
    },
    {
      topic: "Cleaning",
      guidance:
        "To clean your Edgkonnect MCPT-1-XC, use a moistened or antistatic cloth. Do not use solvents or abrasive cleaners.",
    },
    {
      topic: "Water Resistance",
      guidance:
        "The device carries an IP68 rating, meaning it is waterproof and dustproof under standard testing conditions. Avoid exposing charging ports to water.",
    },
    {
      topic: "SIM Card",
      guidance:
        "Do NOT insert a third-party SIM card. The device uses a pre-installed Edgkonnect embedded SIM. Inserting a SIM may damage the device and void the warranty.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Battery, Storage & Maintenance
        </h2>

        {/* Battery & Screen Management */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Battery & Screen Management</h3>
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <p className="text-foreground/90 leading-relaxed mb-4">
              The Edgkonnect MCPT-1-XC screen will go to sleep mode after 5 minutes of inactivity to save battery and extend operational hours. You can still use the power on/off key to wake up the screen. Powering off the screen without turning off the device extends the unit&apos;s operational hours significantly.
            </p>
          </div>
        </div>

        {/* Storage & Environmental Precautions */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Storage & Environmental Precautions</h3>
          <div className="grid gap-4">
            {precautions.map((precaution, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg border border-border bg-card/50">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-semibold">
                    ✓
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-foreground mb-1">{precaution.topic}</h4>
                  <p className="text-foreground/80">{precaution.guidance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care Instructions */}
        <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Looking After Your Device</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                🌡️
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Temperature Protection</h4>
                <p className="text-foreground/80">
                  Avoid exposing the device to extreme temperatures. Keep it away from direct sunlight for extended periods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                🧹
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Regular Cleaning</h4>
                <p className="text-foreground/80">
                  Use a soft, moistened cloth to clean the device. Avoid harsh chemicals or abrasive materials.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                💧
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Water Protection</h4>
                <p className="text-foreground/80">
                  While IP68 rated, keep charging ports protected from water exposure and moisture.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                🔋
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Battery Care</h4>
                <p className="text-foreground/80">
                  Charge regularly for optimal performance. Use only the provided USB-C charger or compatible Edgkonnect chargers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
