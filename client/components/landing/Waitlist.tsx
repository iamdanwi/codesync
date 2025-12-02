"use client";

import { motion } from "framer-motion";

export function Waitlist() {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Get Early Access</h2>
        <p className="text-zinc-400 mb-8">
          Be the first to experience the future of collaborative coding.
        </p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            Join Waitlist
          </button>
        </form>
      </motion.div>
    </section>
  );
}
