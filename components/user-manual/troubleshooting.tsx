export function Troubleshooting() {
  const issues = [
    {
      issue: "Device won't turn on",
      cause: "Battery depleted",
      solution:
        "Charge via USB-C for at least 30 minutes before attempting to power on.",
    },
    {
      issue: "No audio / poor sound",
      cause: "Low volume or PTT held incorrectly",
      solution:
        "Press Volume Up (#12). Hold PTT ~10 cm from mouth. Use earpiece if needed.",
    },
    {
      issue: "Screen is blank",
      cause: "Sleep mode active",
      solution:
        "Press the Power button briefly to wake the screen.",
    },
    {
      issue: "Cannot connect to group",
      cause: "Network / SIM issue",
      solution:
        "Ensure you are in an LTE coverage area. Contact customercare@edgkonnect.com.",
    },
    {
      issue: "SOS not sending",
      cause: "Out of range or dispatcher offline",
      solution:
        "Confirm LTE signal and dispatcher status. Contact support if issue persists.",
    },
    {
      issue: "Device overheating",
      cause: "Extreme ambient temperature",
      solution:
        "Move to a cooler environment. Never leave in direct sunlight (>85°C).",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Troubleshooting & Support
        </h2>

        {/* Troubleshooting Table */}
        <div className="mb-16 overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-6 py-4 text-left font-semibold">Issue</th>
                <th className="px-6 py-4 text-left font-semibold">Possible Cause</th>
                <th className="px-6 py-4 text-left font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border ${
                    idx % 2 === 0 ? "bg-background/30" : "bg-background/50"
                  } hover:bg-background/70 transition-colors`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{item.issue}</td>
                  <td className="px-6 py-4 text-foreground/80">{item.cause}</td>
                  <td className="px-6 py-4 text-foreground/80">{item.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg bg-background border-2 border-primary">
            <h3 className="text-xl font-bold text-foreground mb-4">For More Information</h3>
            <p className="text-foreground/90 mb-4">
              Visit our website for technical documentation, FAQs, and additional resources.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Visit Edgkonnect Website
              <span>→</span>
            </a>
          </div>

          <div className="p-8 rounded-lg bg-background border-2 border-secondary">
            <h3 className="text-xl font-bold text-foreground mb-4">Technical Support</h3>
            <p className="text-foreground/90 mb-4">
              Need immediate assistance? Contact our support team for help.
            </p>
            <a
              href="mailto:customercare@edgkonnect.com"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors"
            >
              Email Support
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Key Reminders */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary rounded-r-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Key Reminders</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Keep the device in LTE coverage areas for reliable connectivity.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Charge the device regularly to maintain optimal performance.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Do NOT insert third-party SIM cards into the device.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Use the SOS button only in genuine emergency situations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Protect the device from extreme temperatures and direct sunlight.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl leading-none">✓</span>
              <span className="text-foreground/90">
                Use only authorized Edgkonnect chargers and accessories.
              </span>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>© Edgkonnect {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2">
            Complete Push-to-Talk Communication Solution designed for mission-critical operations.
          </p>
        </div>
      </div>
    </section>
  )
}
