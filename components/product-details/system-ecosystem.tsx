'use client'

export function SystemEcosystem() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#05204A] to-[#0a3d6b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Ecosystem
          </h2>
          <p className="text-xl text-[#CAF0F8]/80 font-light max-w-3xl mx-auto">
            Integrated hardware, software, and management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Device */}
          <div className="p-8 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">MCPPT-1-XC Device</h3>
            <p className="text-[#CAF0F8]/80 text-sm">
              Rugged PTT device with IP68 waterproof rating
            </p>
          </div>

          {/* Mobile App */}
          <div className="p-8 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-5xl mb-4">📲</div>
            <h3 className="text-xl font-bold text-white mb-2">Mobile Dispatcher</h3>
            <p className="text-[#CAF0F8]/80 text-sm">
              Android app for on-the-go communication
            </p>
          </div>

          {/* Web Admin */}
          <div className="p-8 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-5xl mb-4">🖥️</div>
            <h3 className="text-xl font-bold text-white mb-2">Web Admin</h3>
            <p className="text-[#CAF0F8]/80 text-sm">
              Centralized device and user management
            </p>
          </div>

          {/* Dispatcher */}
          <div className="p-8 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-5xl mb-4">🎛️</div>
            <h3 className="text-xl font-bold text-white mb-2">Dispatcher</h3>
            <p className="text-[#CAF0F8]/80 text-sm">
              Multi-display dispatch console
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
