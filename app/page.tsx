"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  { src: "/screenshots/CreateList.png", label: "Never rebuild your list again" },
  { src: "/screenshots/ActiveList.png", label: "Open and shop immediately" },
  { src: "/screenshots/ShoppingComplete.png", label: "Finish faster with no friction" },
  { src: "/screenshots/StaplesList.png", label: "Your essentials are remembered" },
];

function ScreenshotFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="w-[300px] flex flex-col items-center">
      <div className="relative bg-black rounded-[3rem] p-2 shadow-xl w-full">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-20" />

        <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden">
          <Image src={src} alt={label} fill className="object-cover object-top" />
        </div>
      </div>

      <p className="text-xs text-center text-zinc-500 mt-3">{label}</p>
    </div>
  );
}

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="pt-20 pb-12 text-center max-w-3xl mx-auto px-6 space-y-6">

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Your shopping list should remember itself.
        </h1>

        <p className="text-zinc-600 text-lg">
          StapleRun turns repeated purchases into memory — and rebuilds your shopping lists automatically in seconds.
        </p>

        <p className="text-xs text-zinc-500">
          Built for households, roommates, and anyone with recurring essentials.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">

          <button className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-6 py-3 rounded-xl text-sm font-semibold">
            📱 Download on iOS
          </button>

          <button className="bg-black hover:bg-zinc-900 transition text-white px-6 py-3 rounded-xl text-sm font-semibold">
            🤖 Get it on Android
          </button>

        </div>

        <p className="text-xs text-zinc-400">
          No more rebuilding the same shopping list every week.
        </p>

      </section>

      {/* CORE HOUSEHOLD SYSTEM (REPLACED SECTION) */}
      <section className="py-10 bg-emerald-50 border-y border-zinc-100 text-center px-6">

        <h2 className="text-2xl font-bold text-zinc-900">
          One household. Multiple intelligent shopping lists.
        </h2>

        <div className="text-sm text-zinc-600 max-w-2xl mx-auto mt-2 space-y-2">
         <p>Each household can create multiple lists for different routines.</p>
         <p>StapleRun learns your buying patterns and rebuilds them automatically.</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-zinc-700">

          <span className="bg-white border border-zinc-200 px-3 py-1 rounded-full">
            🏠 Shared household
          </span>

          <span className="bg-white border border-zinc-200 px-3 py-1 rounded-full">
            🧑‍🤝‍🧑 Multiple members
          </span>

          <span className="bg-white border border-zinc-200 px-3 py-1 rounded-full">
            🛒 Store-based lists
          </span>

          <span className="bg-white border border-zinc-200 px-3 py-1 rounded-full">
            🧠 Purchase memory
          </span>

        </div>

      </section>

      {/* BEFORE / AFTER */}
      <section className="py-14 bg-white border-y border-zinc-100">

        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-sm">

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/60">
            <h3 className="font-bold mb-4 text-zinc-900">Before StapleRun</h3>
            <ul className="space-y-2 text-zinc-600 list-disc pl-5">
              <li>Rewriting the same list every week</li>
              <li>Forgetting recurring essentials</li>
              <li>Notes scattered across apps</li>
              <li>Rebuilding from scratch repeatedly</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/60">
            <h3 className="font-bold mb-4 text-emerald-600">After StapleRun</h3>
            <ul className="space-y-2 text-zinc-900 list-disc pl-5">
              <li>Your habits become memory</li>
              <li>Each routine has its own smart list</li>
              <li>Lists rebuild automatically</li>
              <li>Everything stays aligned</li>
            </ul>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 text-center max-w-3xl mx-auto px-6 space-y-6">

        <h2 className="text-2xl font-bold">How it works</h2>

        <div className="text-sm text-zinc-600 space-y-3">
          <p>1. Create lists for your routines</p>
          <p>2. StapleRun learns repeated purchases</p>
          <p>3. Lists rebuild automatically</p>
        </div>

      </section>

      {/* WHY DIFFERENT */}
      <section className="py-14 text-center max-w-3xl mx-auto px-6 space-y-4">

        <h2 className="text-2xl font-bold">Why StapleRun is different</h2>

        <p className="text-zinc-600 text-sm">
          Most apps help you manage lists.
          <span className="text-emerald-600 font-medium">
            {" "}StapleRun removes the need to recreate them.
          </span>
        </p>

      </section>

      {/* CAROUSEL */}
      <section className="py-20">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">See it in action</h2>
        </div>

        <div className="relative flex justify-center h-[650px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
            >
              <ScreenshotFrame
                src={screenshots[index].src}
                label={screenshots[index].label}
              />
            </motion.div>
          </AnimatePresence>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center max-w-2xl mx-auto px-6 space-y-6">

        <h2 className="text-3xl font-bold">
          Stop rebuilding your shopping list every week
        </h2>

        <p className="text-zinc-600 text-sm">
          Let your routine become your system.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition">
            📱 Get the App
          </button>

          <button className="bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-semibold transition">
            🔥 Install on Android
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 py-10 text-center">

        <p className="text-xs text-emerald-600 mb-4">
          Privacy-first • Guest mode supported • Multi-list memory system
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
          <a href="/privacy" className="hover:text-emerald-600">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-emerald-600">Terms</a>
          <span>•</span>
          <a href="/support" className="hover:text-emerald-600">Support</a>
        </div>

        <p className="mt-4 text-[11px] text-zinc-300">
          © {new Date().getFullYear()} StapleRun
        </p>

      </footer>

    </div>
  );
}