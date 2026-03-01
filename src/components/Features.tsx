"use client";

import { GlassCard } from "./GlassCard";
import { Zap, Smartphone, Shield, Layers, Globe } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "1. Connect Devices",
    description: "Install OurTab on your browser and mobile devices to enable instant cross-platform synchronization.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Layers,
    title: "2. Organize Layers",
    description: "Group your tabs into workspaces. Use layers to keep your research, social, and work distinct.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Shield,
    title: "3. Secure Workspace",
    description: "Enable end-to-end encryption for your private shared tabs and collaborative notes.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Globe,
    title: "4. Collaborative Share",
    description: "Generate a secure link to share your curated workspaces with teammates or friends instantly.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

export function Features() {
  return (
    <section id="guide" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Product <span className="text-gradient">Guide</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Follow this simple guide to master your new digital workspace and boost your team's productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <GlassCard key={idx} className="group hover:-translate-y-2 transition-all duration-300">
              <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors duration-300 ${step.bg} group-hover:bg-primary group-hover:text-white`}>
                <step.icon className={`w-8 h-8 ${step.color} group-hover:text-white`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
