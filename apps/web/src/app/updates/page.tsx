import { ArrowLeft, Sparkles, CheckCircle2, History, Info, MonitorDown, LayoutTemplate, Brush } from "lucide-react";
import Link from "next/link";

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden font-sans">

      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Animated Grid Floor */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2.5)',
            transformOrigin: 'top center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
      </div>

      {/* Header */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-300">
        <header className="premium-glass rounded-[2rem] flex items-center justify-between px-3 py-3 pl-6">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="Khattat" className="w-10 h-auto group-hover:scale-105 transition-transform" />
            <div className="text-xl font-extrabold tracking-tight">Khattat<span className="text-blue-500">.</span></div>
          </Link>
          <nav className="hidden md:flex space-x-1 p-1 bg-white/5 rounded-[1.5rem] border border-white/5">
            <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </nav>
        </header>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-48 pb-32 flex flex-col items-center">

        <div className="mb-16 flex flex-col items-center w-full relative">
          <div className="inline-flex items-center space-x-2 premium-glass text-emerald-300 text-xs font-bold px-5 py-2 rounded-full mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-float">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Updates & Changelog</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-center">
            App Information
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl text-center font-light mb-12">
            Always stay up to date with the latest features, improvements, and bug fixes for your Khattat desktop application.
          </p>
        </div>

        {/* Current Version Card */}
        <section className="w-full mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="premium-glass rounded-[3rem] p-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-zinc-950/90 backdrop-blur-3xl rounded-[2.8rem] p-10 md:p-14 border border-white/5 shadow-inner">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                {/* Info Block */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                  <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center mb-6 shadow-2xl overflow-hidden">
                    <img src="/logo.svg" alt="Khattat Logo" className="w-12 h-12 opacity-90 drop-shadow-md" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                    Khattat
                  </h2>
                  <p className="text-zinc-400 text-lg mb-8 max-w-md">
                    The ultimate square Kufic design tool for desktop and web.
                  </p>

                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 flex flex-col gap-1">
                      <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider flex items-center gap-2">
                        <Info size={14} /> Version
                      </span>
                      <span className="text-zinc-200 font-mono text-xl font-bold">v1.0.0</span>
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 flex flex-col gap-1">
                      <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider flex items-center gap-2">
                        <History size={14} /> Released
                      </span>
                      <span className="text-zinc-200 font-medium text-lg">June 2026</span>
                    </div>
                  </div>
                </div>

                {/* Status Block */}
                <div className="w-full md:w-80 premium-glass bg-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-center border border-emerald-500/20 relative overflow-hidden text-center shrink-0">
                  <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/10 blur-[30px] opacity-50"></div>
                  <CheckCircle2 size={48} className="text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Stable Release</h3>
                  <p className="text-zinc-400 text-sm font-medium relative z-10">Your app is fully up to date.</p>

                  <button className="mt-8 w-full py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold rounded-xl hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2">
                    <MonitorDown size={18} /> Download Latest
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Release Notes */}
        <section className="w-full">
          <h3 className="text-2xl font-bold mb-8 px-4 border-l-4 border-blue-500">Release Notes</h3>

          <div className="space-y-6">
            <div className="premium-glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="shrink-0 w-32">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-bold font-mono rounded-lg border border-blue-500/30">
                    v1.0.0
                  </span>
                  <div className="text-zinc-500 text-sm mt-3 font-medium">Initial Release</div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-yellow-400" /> Introducing Khattat
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      We are thrilled to launch the first stable version of Khattat. Designed specifically for the beautiful art of Square Kufic calligraphy, this initial release brings you a meticulously crafted digital environment for your artistic needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 flex items-start gap-3">
                      <LayoutTemplate size={20} className="text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-zinc-200 text-sm mb-1">Infinite Canvas</div>
                        <div className="text-xs text-zinc-500">Pan and zoom without constraints in any direction.</div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 flex items-start gap-3">
                      <Brush size={20} className="text-pink-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-zinc-200 text-sm mb-1">Advanced Tooling</div>
                        <div className="text-xs text-zinc-500">Draw, erase, select, flip, and rotate with precision.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
