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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          Device Operations
        </h2>

        {/* One-to-One Calls */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Starting a One-to-One (PTT) Call</h3>
          <p className="text-foreground/80 mb-8">
            This is a simple PTT session involving just one caller and one recipient.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Steps */}
            <div className="space-y-3">
              {oneToOneSteps.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3997-6JNL8c4wrCGV7pQVNy0nCjwPCwjgJK.jpeg"
                alt="Starting a one-to-one call instructions"
                className="max-w-sm w-full rounded-lg"
              />
            </div>
          </div>

          {/* Sleep Mode Note */}
          <div className="mt-8 p-6 rounded-lg border border-border bg-background/30">
            <h4 className="font-semibold text-foreground mb-2">Screen Sleep Mode</h4>
            <p className="text-foreground/80">
              The Edgkonnect MCPT-1-XC screen will go to sleep mode after 5 minutes of inactivity to save battery and extend operational hours. You can still use the power on/off key to wake up the screen. You can still use the unit perfectly with the screen off, which will save battery and extend the unit&apos;s operational hours.
            </p>
          </div>
        </div>

        {/* Switching Between Groups */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Switching Between Groups</h3>
          <div className="p-6 rounded-lg border-2 border-primary bg-primary/10 mb-6">
            <p className="text-foreground/90 leading-relaxed">
              Rotate the Rotary Knob (Control #1) to cycle through available groups. The current group name will be displayed on screen. After a 1-to-1 call, press the Back to Group Call button (#8) to return to group communications.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-background/50 border border-border">
            <h4 className="font-bold text-foreground mb-3 text-lg">Additional Usage Tips</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-foreground/90">
                  <strong>Press the PTT button</strong> to initiate a call.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-foreground/90">
                  <strong>Listen via the PTT speaker or earphone.</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-foreground/90">
                  <strong>In a noisy environment,</strong> speak into the microphone or move the PTT closer to your mouth for better communication.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SOS Emergency Function */}
        <div className="p-6 rounded-lg border-2 border-destructive bg-destructive/10">
          <h3 className="text-xl font-bold text-destructive mb-3">SOS Emergency Function</h3>
          <p className="text-foreground/90 leading-relaxed">
            Press the SOS button (#14) to immediately send an SOS alert to the App-Based Mobile Dispatcher or Mission Critical Group Communication Windows Dispatcher. <strong>Use only in genuine emergencies.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
