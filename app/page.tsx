import { GLSLHills } from "@/components/main/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <GLSLHills />
      </div>

      {/* Floating SVG Elements (Abstract YouTube/Thumbnail concept) */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Play Button Shape */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M20 10L80 50L20 90V10Z" stroke="white" strokeWidth="2" />
            <rect x="5" y="5" width="90" height="90" rx="10" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        {/* Thumbnail Grid Frame */}
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-20">
          <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
            <rect x="2" y="2" width="156" height="96" rx="8" stroke="white" strokeWidth="2" />
            <line x1="2" y1="50" x2="158" y2="50" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="80" cy="50" r="15" stroke="#FF0000" strokeWidth="2" className="animate-ping" />
          </svg>
        </div>
      </div>

      <div className="z-10 text-center pointer-events-none px-4">
        <div className="inline-block mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
          <span className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase">Powered by Advanced AI</span>
        </div>

        <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 mb-6 tracking-tight drop-shadow-2xl">
          Nailart.AI
        </h1>

        <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          AI-powered <span className="text-white/80 font-medium">YouTube thumbnails</span> that demand attention.<br className="hidden md:block" />
          Create stunning visuals that drive clicks in seconds.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Create My Thumbnail
          </button>
          <button className="px-8 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:bg-white/5 transition-all">
            See Showcase
          </button>
        </div>
      </div>

      {/* Subtle Bottom Accents */}
      <div className="absolute bottom-8 left-0 right-0 z-10 text-center pointer-events-none">
        <p className="text-white/20 text-[10px] tracking-widest uppercase">Revolutionizing Creator Workflow</p>
      </div>
    </main>
  );
}