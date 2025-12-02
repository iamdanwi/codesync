"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";
import Link from "next/link";

const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      className="relative w-full max-w-3xl mx-auto mt-16 rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="flex-1 text-center text-xs font-mono text-zinc-500">collaboration.ts</div>
      </div>
      <div className="p-6 font-mono text-sm overflow-x-auto">
        <div className="flex gap-4">
          <div className="flex flex-col text-zinc-700 select-none text-right">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
          <div className="flex-1 text-zinc-300">
            <p><span className="text-purple-400">import</span> {"{ Y }"} <span className="text-purple-400">from</span> <span className="text-green-400">'yjs'</span>;</p>
            <p><span className="text-purple-400">import</span> {"{ WebsocketProvider }"} <span className="text-purple-400">from</span> <span className="text-green-400">'y-websocket'</span>;</p>
            <p className="h-4" />
            <p><span className="text-purple-400">const</span> doc = <span className="text-purple-400">new</span> Y.Doc();</p>
            <p><span className="text-purple-400">const</span> wsProvider = <span className="text-purple-400">new</span> WebsocketProvider(</p>
            <p className="pl-4"><span className="text-green-400">'ws://localhost:1234'</span>,</p>
            <p className="pl-4"><span className="text-green-400">'my-roomname'</span>,</p>
            <p className="pl-4">doc</p>
            <p>);</p>
            <p className="h-4" />
            <p className="relative">
              wsProvider.on(<span className="text-green-400">'status'</span>, event ={">"} {"{"}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute -right-1.5 top-0 w-2 h-5 bg-purple-500"
              />
              <span className="absolute -right-24 -top-8 bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full opacity-80">
                User A is typing...
              </span>
            </p>
            <p className="pl-4">console.log(event.status); <span className="text-zinc-500">// 'connected'</span></p>
            <p>{"}"});</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4 overflow-hidden z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-xl mb-8 hover:bg-zinc-800/50 transition-colors cursor-default"
      >
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        v0.1.0 Beta Coming Soon
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 text-center max-w-4xl"
      >
        Code at the speed of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
          thought.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 text-center"
      >
        Experience the next generation of collaborative development. <br className="hidden md:block" />
        Real-time sync, ephemeral presence, and zero-latency editing.
      </motion.p>

      <div className="flex gap-4 mb-16">
        <Link href="https://github.com/iamdanwi/codesync" target="_blank">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cursor-pointer px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          Join the Waitlist
        </motion.button>
        </Link>
        <Link href="https://github.com/iamdanwi/codesync" target="_blank">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="cursor-pointer px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" />
            View on GitHub
          </motion.button>
        </Link>
      </div>

      <CodeWindow />
    </section>
  );
}
