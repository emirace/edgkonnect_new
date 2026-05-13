'use client'

export function Operations() {
  const oneToOneSteps = [
    {
      step: 1,
      title: "Locate Groups",
      description:
        "At the main menu, locate groups by rotating the knob. Users are shown at the bottom window of the display as usernames.",
    },
    {
      step: 2,
      title: "Scroll Users",
      description: "Use the navigation keys (Up/Down) to scroll the user list.",
    },
    {
      step: 3,
      title: "Initiate Call",
      description:
        "Press the PTT button to start a one-to-one call with the selected individual.",
    },
    {
      step: 4,
      title: "Adjust Volume",
      description: "Press the Volume +/- button to adjust the audio volume level.",
    },
    {
      step: 5,
      title: "Return to Group",
      description: "Press the OK button to go back to the group interface.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204A] mb-4">
            Device Operations
          </h2>
          <p className="text-lg text-[#05204A]/70 font-light">
            Learn how to make calls, switch groups, and use emergency functions
          </p>
        </div>

        {/* One-to-One Calls Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#05204A] mb-4">One-to-One PTT Calls</h3>
          <p className="text-[#05204A]/70 mb-8 leading-relaxed">
            Initiate direct calls with individual users. This is a simple PTT session involving just one caller and one recipient.
          </p>

          {/* Steps as Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {oneToOneSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Connection line for desktop */}
                {step.step < oneToOneSteps.length && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%+8px)] h-0.5 bg-gradient-to-r from-[#0080E2] to-transparent"></div>
                )}
                
                <div className="p-6 rounded-xl border border-[#05204A]/10 hover:border-[#0080E2]/30 hover:shadow-lg transition-all bg-gradient-to-br from-white to-[#05204A]/3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0080E2] to-[#45D6A8] text-white font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-[#05204A] mb-3 text-center text-sm">{step.title}</h4>
                  <p className="text-sm text-[#05204A]/70 text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Switching Groups Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#05204A] mb-4">Switching Between Groups</h3>
          <div className="p-8 rounded-xl border border-[#05204A]/10 bg-gradient-to-br from-[#05204A]/5 to-transparent">
            <p className="text-[#05204A]/80 mb-6 leading-relaxed">
              Rotate the Rotary Knob (Control #1) to cycle through available groups. The current group name will be displayed on screen. After a 1-to-1 call, press the Back to Group Call button (#8) to return to group communications.
            </p>
            <div className="flex gap-2 flex-wrap">
              <div className="px-4 py-2 rounded-lg bg-white border border-[#0080E2]/20">
                <span className="text-[#0080E2] font-semibold text-sm">Tip:</span>
                <span className="text-[#05204A]/70 text-sm ml-2">You can quickly switch groups while on an active call</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Function Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#05204A] mb-4">Emergency SOS Function</h3>
          <div className="p-8 rounded-xl border-2 border-[#ef4444]/30 bg-[#ef4444]/5">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#ef4444]/20">
                  <span className="text-[#ef4444] font-bold">⚠</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#05204A] mb-2">SOS Button (#14)</h4>
                <p className="text-[#05204A]/80 leading-relaxed mb-4">
                  Press the SOS button to immediately send an SOS alert to the App-Based Mobile Dispatcher or Mission Critical Group Communication Windows Dispatcher. Use only in genuine emergencies. This action will override normal operations and prioritize your emergency communication.
                </p>
                <p className="text-sm text-[#05204A]/70 italic">
                  Emergency alerts are always transmitted with the highest priority and encryption level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
