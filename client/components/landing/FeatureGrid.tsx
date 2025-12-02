"use client";

import { motion } from "framer-motion";
import { Zap, Users, Globe, Lock, Cpu, GitBranch } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Sync",
    description: "CRDT-based conflict resolution ensures your code stays consistent worldwide.",
    className: "md:col-span-2",
  },
  {
    icon: Zap,
    title: "<30ms Latency",
    description: "Optimized WebSocket architecture for instant feedback.",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Presence",
    description: "See who's editing what, in real-time.",
    className: "md:col-span-1",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "End-to-end encryption for all your collaborative sessions.",
    className: "md:col-span-2",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Engineered for Performance
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Built on top of proven technologies to deliver a seamless coding experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900/80 transition-all hover:border-zinc-700 group ${feature.className}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-zinc-100 group-hover:text-purple-400 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
