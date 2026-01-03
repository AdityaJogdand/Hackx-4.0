import DomeGallery from './DomeGallery';

export default function PastGlimpse() {
  return (
    <div id="glimpse" className="hidden md:block relative w-screen h-screen bg-white overflow-hidden">
      {/* F1 Themed Header - HUD (Orange Version) */}
      <header className="absolute top-0 left-0 w-full z-40 p-6 md:p-10 pointer-events-none">
        <div className="flex items-start justify-between max-w-[1920px] mx-auto">
          {/* Left Side: Title */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              {/* Vertical Orange bar */}
              <div className="w-1.5 h-8 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
              <h1 className="text-4xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-none transform -skew-x-12">
                Past <span className="text-orange-500">Glimpse</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 ml-5">
              <span className="text-[10px] font-mono text-zinc-400 tracking-[0.3em] uppercase">
                Archive_Session_2024
              </span>
            </div>
          </div>

          {/* Right Side: Telemetry Style Data */}
          <div className="hidden md:flex flex-col items-end font-mono">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              LIVE FEED // 360° VIEW
            </div>
            <div className="text-[9px] text-zinc-400 space-y-0.5 text-right uppercase tracking-wider">
              <p className="text-black font-bold">SOURCE: DOME_01</p>
              <p>LATENCY: 14MS</p>
              <p className="text-green-600">SIGNAL: OPTIMAL</p>
            </div>
          </div>
        </div>
      </header>

      {/* Interaction Hint - Subtle "Press & Drag" Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-3">
        {/* Animated Hand/Drag Icon */}
        <div className="relative w-12 h-6 border border-zinc-200 rounded-full bg-white/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full animate-drag-hint" />
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-black uppercase">
            Interact to Pan
          </span>
          <div className="flex gap-1 mt-1">
            <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
            <div className="w-8 h-[1px] bg-zinc-200 self-center" />
            <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="relative z-10" style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery />
      </div>

      <style>{`
        @keyframes drag-hint {
          0%, 100% { transform: translate(-150%, -50%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(50%, -50%); opacity: 0; }
        }
        .animate-drag-hint {
          animation: drag-hint 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}