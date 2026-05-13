"use client";

export function Troubleshooting() {
  const issues = [
    {
      issue: `Device won't turn on`,
      cause: "Battery depleted",
      solution:
        "Charge via USB-C for at least 30 minutes before attempting to power on.",
      severity: "critical",
    },
    {
      issue: "No audio / poor sound",
      cause: "Low volume or PTT held incorrectly",
      solution:
        "Press Volume Up (#12). Hold PTT ~10 cm from mouth. Use earpiece if needed.",
      severity: "warning",
    },
    {
      issue: "Screen is blank",
      cause: "Sleep mode active",
      solution: "Press the Power button briefly to wake the screen.",
      severity: "info",
    },
    {
      issue: "Cannot connect to group",
      cause: "Network / SIM issue",
      solution:
        "Ensure you are in an LTE coverage area. Contact support@edgkonnect.com.",
      severity: "critical",
    },
    {
      issue: "SOS not sending",
      cause: "Out of range or dispatcher offline",
      solution:
        "Confirm LTE signal and dispatcher status. Contact support if issue persists.",
      severity: "critical",
    },
    {
      issue: "Device overheating",
      cause: "Extreme ambient temperature",
      solution:
        "Move to a cooler environment. Never leave in direct sunlight (>85°C).",
      severity: "warning",
    },
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-[#ef4444]/30 bg-[#ef4444]/5";
      case "warning":
        return "border-[#0080E2]/30 bg-[#0080E2]/5";
      default:
        return "border-[#45D6A8]/30 bg-[#45D6A8]/5";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return "🔴";
      case "warning":
        return "🟡";
      default:
        return "🟢";
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
            Troubleshooting & Support
          </h2>
          <p className="text-lg text-[#05204A]/70 font-light">
            Quick solutions to common issues and when to contact support
          </p>
        </div>

        {/* Troubleshooting Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#05204A] mb-8">
            Common Issues & Solutions
          </h3>

          <div className="space-y-4">
            {issues.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all hover:shadow-md ${getSeverityStyles(item.severity)}`}
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  {/* Issue */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">
                        {getSeverityIcon(item.severity)}
                      </span>
                      <h4 className="font-semibold text-[#05204A]">
                        {item.issue}
                      </h4>
                    </div>
                  </div>

                  {/* Cause */}
                  <div>
                    <p className="text-xs font-semibold text-[#05204A]/60 uppercase tracking-wider mb-1">
                      Possible Cause
                    </p>
                    <p className="text-[#05204A]/80 text-sm">{item.cause}</p>
                  </div>

                  {/* Solution */}
                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold text-[#05204A]/60 uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-[#05204A]/80 text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Support Information */}
          <div className="p-8 rounded-xl border border-[#45D6A8]/30 bg-[#45D6A8]/10">
            <h3 className="text-2xl font-bold text-[#05204A] mb-6">
              Need More Help?
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#05204A]/60 uppercase tracking-wider mb-2">
                  Technical Support
                </p>
                <p className="text-[#05204A]/80 mb-1">Email:</p>
                <a
                  href="mailto:support@edgkonnect.com"
                  className="text-[#0080E2] hover:text-[#0080E2]/80 font-medium"
                >
                  support@edgkonnect.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#05204A]/60 uppercase tracking-wider mb-2">
                  Response Time
                </p>
                <p className="text-[#05204A]/80">
                  We aim to respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="p-8 rounded-xl border border-[#0080E2]/30 bg-[#0080E2]/10">
            <h3 className="text-2xl font-bold text-[#05204A] mb-6">
              Before You Contact Support
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#0080E2] font-bold text-lg">✓</span>
                <span className="text-[#05204A]/80">
                  Verify you have LTE/4G signal coverage
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#0080E2] font-bold text-lg">✓</span>
                <span className="text-[#05204A]/80">
                  Check that the device is fully charged
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#0080E2] font-bold text-lg">✓</span>
                <span className="text-[#05204A]/80">
                  Restart the device by powering off and on
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#0080E2] font-bold text-lg">✓</span>
                <span className="text-[#05204A]/80">
                  Verify you are within a group and not blocked
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
