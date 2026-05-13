export function UserManualHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#05204A]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#CAF0F8] mb-4 text-balance">
          Push-to-Talk User Manual
        </h1>
        <p className="text-lg md:text-xl text-[#CAF0F8]/80 mb-8 text-balance">
          Complete guide for Edgkonnect Push-to-Talk Communication Systems
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-[#45D6A8]">
            <span className="inline-block w-2 h-2 bg-[#45D6A8] rounded-full"></span>
            <span>Mission-Critical Device</span>
          </div>
          <div className="flex items-center gap-2 text-[#45D6A8]">
            <span className="inline-block w-2 h-2 bg-[#45D6A8] rounded-full"></span>
            <span>LTE/4G Cellular</span>
          </div>
          <div className="flex items-center gap-2 text-[#45D6A8]">
            <span className="inline-block w-2 h-2 bg-[#45D6A8] rounded-full"></span>
            <span>IP68 Waterproof</span>
          </div>
        </div>
      </div>
    </section>
  )
}
