import { Grid3X3, Layers, PenTool, ArrowRight, MousePointerSquareDashed, Sparkles, Move3d, Zap, Check, Type, Eraser, Hand, Palette, Save, Library, Languages, Settings, Trash2, Mail, Globe, Monitor, Apple, Terminal, Smartphone, Download } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden font-sans">
      
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
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

      {/* Ultra-Premium Header */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-300">
        <header className="premium-glass rounded-[2rem] flex items-center justify-between px-3 py-3 pl-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Khattat" className="w-10 h-auto" />
            <div className="text-xl font-extrabold tracking-tight">Khattat<span className="text-blue-500">.</span></div>
          </div>
          <nav className="hidden md:flex space-x-1 p-1 bg-white/5 rounded-[1.5rem] border border-white/5">
            <Link href="#features" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all">Platform</Link>
            <Link href="/updates" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all">Updates</Link>
            <Link href="#open-source" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all">Open Source</Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full transition-all">Contact</Link>
          </nav>
          <div className="pr-1">
            <a href="https://github.com/kurzagin/khattat" className="bg-white text-black font-bold px-6 py-2.5 rounded-full transition-all hover:bg-zinc-200 text-sm hidden sm:block">
              View Source
            </a>
          </div>
        </header>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32 flex flex-col items-center">
        
        {/* Cinematic Hero Section */}
        <section className="mb-40 flex flex-col items-center w-full relative">
          
          <div className="inline-flex items-center space-x-2 premium-glass text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-10 tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)] animate-float">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Redefining Kufic Art</span>
          </div>

          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-8 leading-[0.9] text-center max-w-5xl">
            Precision engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">for ancient craft.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-14 leading-relaxed text-center font-light">
            An infinite, pixel-perfect digital canvas built specifically for professional Kufic calligraphy designers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#platforms" className="group relative px-8 py-4 bg-white text-black font-extrabold rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Launch Editor <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="#demo" className="group px-8 py-4 premium-glass text-white font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-zinc-400 group-hover:text-yellow-400 transition-colors" /> Watch Demo
            </Link>
          </div>

          {/* Hero Visual Showcase - Abstract Editor View */}
          <div className="mt-24 w-full max-w-5xl relative animate-float" style={{ animationDuration: '8s' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="premium-glass p-2 rounded-[2rem] border border-white/10">
              <div className="w-full h-[400px] bg-[#0a0a0a] rounded-[1.5rem] relative overflow-hidden border border-zinc-900 shadow-inner">
                {/* Simulated Canvas */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '32px 32px', backgroundPosition: 'calc(50% - 16px) 50%' }}></div>
                {/* Simulated Drawn Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[672px] h-[320px]">
                  <img src="/logo.svg" alt="Khattat Drawn Art" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] opacity-90" />
                </div>
                {/* Simulated UI Overlays */}
                
                {/* Simulated Left Toolbar */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 premium-glass rounded-2xl p-2 shadow-2xl">
                  <div className="w-10 h-10 flex items-center justify-center mb-2 relative z-10">
                    <img src="/logo.svg" alt="Khattat" className="w-10 h-auto opacity-90" />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <MousePointerSquareDashed size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all relative z-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Type size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Eraser size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Hand size={18} />
                  </div>
                  <div className="w-6 h-px bg-zinc-800 mx-auto my-1 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Palette size={18} />
                  </div>
                </div>

                {/* Simulated Right Toolbar */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 premium-glass rounded-2xl p-2 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Save size={18} />
                  </div>
                  <div className="w-6 h-px bg-zinc-800 mx-auto my-1 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Library size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Grid3X3 size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Languages size={18} />
                  </div>
                  <div className="w-6 h-px bg-zinc-800 mx-auto my-1 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400">
                    <Settings size={18} />
                  </div>
                  <div className="w-6 h-px bg-zinc-800 mx-auto my-1 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-500/80">
                    <Trash2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section id="demo" className="mb-40 w-full">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">See it in action.</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Watch how Khattat transforms the traditional workflow into a seamless digital experience.</p>
          </div>
          <div className="flex flex-col gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-zinc-300">Editor Demo</h3>
              <VideoPlayer src="/demo.webm" title="Khattat Editor Demo" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-zinc-300">Onboarding</h3>
              <VideoPlayer src="/onboarding.webm" title="Khattat Onboarding" />
            </div>
          </div>
        </section>

        {/* Bento Box Features Section */}
        <section id="features" className="mb-40 w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">A studio on your desktop.</h2>
            <p className="text-zinc-400 text-xl max-w-2xl">Uncompromising tools designed to respect the mathematics of Kufic typography.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-[280px]">
            
            {/* Bento Item 1: Large Span */}
            <div className="md:col-span-2 md:row-span-2 premium-glass premium-glass-hover rounded-[2rem] p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                <MousePointerSquareDashed className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Infinite Canvas</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm relative z-10">
                Break free from boundaries. Pan infinitely in any direction. Zoom with sub-pixel perfection. Your art shouldn't be constrained by a page size.
              </p>
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full filter blur-[50px] group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            {/* Bento Item 2 */}
            <div className="md:col-span-2 premium-glass premium-glass-hover rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-6 h-6 text-indigo-400" />
                  <h3 className="text-2xl font-bold">Personal Library</h3>
                </div>
                <p className="text-zinc-400 text-base max-w-md">
                  Save, categorize, and reuse your Rasm groups. Build your personal alphabet and drag-and-drop instantly.
                </p>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="premium-glass premium-glass-hover rounded-[2rem] p-8 flex flex-col relative overflow-hidden group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-auto border border-white/5">
                <Grid3X3 className="w-6 h-6 text-teal-400" />
              </div>
              <div className="relative z-10 mt-6">
                <h3 className="text-xl font-bold mb-2">Snapping</h3>
                <p className="text-zinc-500 text-sm">Mathematically perfect alignments every time.</p>
              </div>
            </div>

            {/* Bento Item 4 */}
            <div className="premium-glass premium-glass-hover rounded-[2rem] p-8 flex flex-col relative overflow-hidden group bg-gradient-to-br from-zinc-900 to-black">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-900/40 to-transparent transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-auto border border-white/5 relative z-10">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="relative z-10 mt-6">
                <h3 className="text-xl font-bold mb-2">Export</h3>
                <p className="text-zinc-500 text-sm">Export high-resolution PNG or raw SVG vectors.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="mb-40 w-full">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Available everywhere.</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Download Khattat for your platform of choice.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Windows */}
            <div className="premium-glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Windows</h3>
              <p className="text-zinc-500 text-sm mb-6">Windows 10/11</p>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors w-full justify-center mt-auto">
                <Download className="w-4 h-4" /> .exe
              </button>
            </div>

            {/* Mobile */}
            <div className="premium-glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Android</h3>
              <p className="text-zinc-500 text-sm mb-6">Android 8.0+</p>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors w-full justify-center mt-auto">
                <Download className="w-4 h-4" /> .apk
              </button>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section id="open-source" className="mb-24 w-full">
          <div className="premium-glass rounded-[3rem] p-1 relative overflow-hidden max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* Animated Border Glow */}
            <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,1)_360deg)] animate-[spin_4s_linear_infinite] opacity-30"></div>
            
            <div className="relative bg-zinc-950/95 backdrop-blur-3xl rounded-[2.8rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white/5">
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black mb-6">Open tools, shared craft.</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                  Khattat is free and open source. Use every feature, study the code, adapt it to your workflow, and help improve it for the community.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Infinite Canvas", "Custom Presets", "Vector Export", "Cloud Sync"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[380px] premium-glass bg-white/5 rounded-[2rem] p-10 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/40 transition-colors duration-500"></div>
                
                <div className="text-zinc-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">MIT Licensed</div>
                <GithubIcon size={72} className="mb-8 text-white" />
                
                <a href="https://github.com/kurzagin/khattat" className="w-full py-4 bg-white text-black text-center font-extrabold rounded-xl transition-all hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] block">
                  Explore on GitHub
                </a>
                <p className="mt-4 text-xs text-zinc-500 text-center font-medium">
                  Contributions, bug reports, and forks are welcome.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Support & Contact Section */}
        <section id="contact" className="mb-24 w-full max-w-5xl mx-auto">
          <div className="premium-glass rounded-[2.5rem] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12">
              <div className="flex-1 md:pr-8">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Connect with us.</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  We're here to support your creative journey. Reach out to us for technical support, feature requests, or enterprise inquiries.
                </p>
                <div className="flex items-center gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <img src="/logo.svg" alt="Logo" className="w-6 h-6 opacity-80" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Khattat Studio</h4>
                    <p className="text-zinc-500 text-sm">Created by Kur Zagin</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:khattat@krzgn.xyz" className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group/card">
                  <Mail size={20} className="text-zinc-500 group-hover/card:text-emerald-400 transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider group-hover/card:text-zinc-400 transition-colors">Email Support</span>
                    <span className="text-zinc-300 group-hover/card:text-white transition-colors">khattat@krzgn.xyz</span>
                  </div>
                </a>
                
                <a href="https://x.com/kurzagin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group/card">
                  <TwitterIcon size={20} className="text-zinc-500 group-hover/card:text-[#1DA1F2] transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider group-hover/card:text-zinc-400 transition-colors">X (Twitter)</span>
                    <span className="text-zinc-300 group-hover/card:text-white transition-colors">@kurzagin</span>
                  </div>
                </a>

                <a href="https://github.com/kurzagin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group/card">
                  <GithubIcon size={20} className="text-zinc-500 group-hover/card:text-white transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider group-hover/card:text-zinc-400 transition-colors">GitHub</span>
                    <span className="text-zinc-300 group-hover/card:text-white transition-colors">@kurzagin</span>
                  </div>
                </a>
                
                <a href="https://krzgn.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group/card">
                  <Globe size={20} className="text-zinc-500 group-hover/card:text-blue-400 transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider group-hover/card:text-zinc-400 transition-colors">Main Site</span>
                    <span className="text-zinc-300 group-hover/card:text-white transition-colors">krzgn.xyz</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
