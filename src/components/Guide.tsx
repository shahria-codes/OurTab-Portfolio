
"use client";

import { GlassCard } from "./GlassCard";
import { Smartphone, Share, MoreVertical, PlusSquare, Download } from "lucide-react";

export function Guide() {
  return (
    <section id="guide" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black/30">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">Guide</span></h2>
          <p className="text-muted-foreground text-lg font-light">
            Install OurTab as a Progressive Web App (PWA) for a native mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Android Section */}
          <GlassCard className="border-white/5 hover:border-emerald-500/30 transition-all duration-300 bg-black/40 backdrop-blur-xl shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Android</h3>
            </div>

            <ol className="space-y-6 text-muted-foreground/80 font-light">
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/30">1</span>
                <p>Open <span className="font-medium text-emerald-50">Google Chrome</span> and navigate to <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">app.ourtab.online</span></p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/30">2</span>
                <p>Tap the <span className="inline-flex items-center translate-y-1 bg-white/5 p-1 rounded-md"><MoreVertical className="w-4 h-4 text-emerald-100" /></span> menu icon in the top right corner.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/30">3</span>
                <p>Select <span className="font-medium text-emerald-50">"Install app"</span> or <span className="font-medium text-emerald-50">"Add to Home screen"</span>.</p>
              </li>
            </ol>
          </GlassCard>

          {/* iOS Section */}
          <GlassCard className="border-white/5 hover:border-cyan-500/30 transition-all duration-300 bg-black/40 backdrop-blur-xl shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">iOS (iPhone/iPad)</h3>
            </div>

            <ol className="space-y-6 text-muted-foreground/80 font-light">
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400 border border-cyan-500/30">1</span>
                <p>Open <span className="font-medium text-cyan-50">Safari</span> and navigate to <span className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-4">app.ourtab.online</span></p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400 border border-cyan-500/30">2</span>
                <p>Tap the <span className="inline-flex items-center translate-y-1 bg-white/5 p-1 rounded-md"><Share className="w-4 h-4 text-cyan-400" /></span> Share button at the bottom center.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400 border border-cyan-500/30">3</span>
                <p>Scroll down and tap <span className="font-medium text-cyan-50">"Add to Home Screen"</span> <span className="inline-flex items-center translate-y-1 bg-white/5 p-1 rounded-md"><PlusSquare className="w-4 h-4 text-cyan-100" /></span>.</p>
              </li>
            </ol>
          </GlassCard>
        </div>

        <div className="mt-16 text-center">
          <div className="glass inline-flex items-center gap-3 px-8 py-4 rounded-full border-white/10 text-sm text-muted-foreground shadow-lg bg-black/60 backdrop-blur-md">
            <Download className="w-4 h-4 animate-bounce text-emerald-400" />
            <span className="font-light">Once installed, you can access OurTab directly from your home screen like a native app. And get notified.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
