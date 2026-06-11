"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com";
const GOOGLE_PLAY_URL = "https://play.google.com";

const screenshots = [
  {
    src: "/screenshots/CreateList.png",
    label: "Never rebuild your list again",
  },
  {
    src: "/screenshots/ActiveList.png",
    label: "Open and shop immediately",
  },
  {
    src: "/screenshots/ShoppingComplete.png",
    label: "Finish faster with no friction",
  },
  {
    src: "/screenshots/StaplesList.png",
    label: "Your essentials are remembered",
  },
];

function ScreenshotFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="w-[300px] flex flex-col items-center">
      <div className="relative bg-black rounded-[3rem] p-2 shadow-xl w-full">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-20" />

        <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover object-top"
            sizes="300px"
            priority
          />
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

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-100/60 backdrop-blur-md bg-white/75">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/icon-512.png"
              alt="StapleRun"
              width={44}
              height={44}
              className="rounded-xl"
              priority
            />

            <span className="font-bold text-lg tracking-tight">
              StapleRun
            </span>
          </div>

          <div className="text-sm text-zinc-500 hidden sm:block">
            Recurring essentials memory system
          </div>

        </div>
      </header>

      {/* HERO (REFINED) */}
      <section className="pt-20 pb-14 text-center max-w-3xl mx-auto px-6 space-y-6">

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          Your grocery list should remember itself.
        </h1>

        <p className="text-zinc-600 text-lg">
          StapleRun remembers what you repeatedly buy and rebuilds your shopping list in seconds.
        </p>

        <p className="text-xs text-zinc-500">
          Built for people who buy the same essentials every week.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={APP_STORE_URL}
            className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-semibold"
          >
            🍎 Download for iPhone
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            className="bg-zinc-100 border border-zinc-200 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            📱 Download for Android
          </a>
        </div>

        <p className="text-xs text-zinc-400">
          Save 3–5 minutes every shopping trip — automatically.
        </p>

      </section>

      {/* BEFORE / AFTER */}
      <section className="py-14 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-sm">

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/60">
              <h3 className="font-bold mb-4">Before StapleRun</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li>Rewriting the same shopping list every week</li>
                <li>Forgetting items you always buy</li>
                <li>Scattered notes across apps</li>
                <li>Rebuilding lists from scratch</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/60">
              <h3 className="font-bold mb-4">After StapleRun</h3>
              <ul className="space-y-2 text-zinc-900 pl-4">
                <li>✔ Your list remembers itself</li>
                <li>✔ One-click rebuild every time</li>
                <li>✔ Always complete essentials</li>
                <li>✔ Zero retyping</li>
              </ul>
            </div>

        </div>
      </section>

      {/* HOW IT WORKS (CLEARER) */}
      <section className="py-14 text-center max-w-3xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl font-bold">How it works</h2>

        <div className="text-sm text-zinc-600 space-y-3">
          <p>1. Add items while you shop</p>
          <p>2. The app detects repeated purchases over time</p>
          <p>3. Your next shopping list is automatically rebuilt</p>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6 space-y-4">
        <h2 className="text-2xl font-bold">
          A memory layer for your everyday essentials
        </h2>

        <p className="text-zinc-600 text-sm">
          StapleRun turns repeat purchases into “Staples” — automatically learning what you buy most often.
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

      {/* HOUSEHOLD (REFINED) */}
      <section className="py-14 bg-zinc-50 border-y border-zinc-100 text-center px-6">
        <h3 className="text-lg font-bold mb-2">
          Built for individuals, couples, and households
        </h3>

        <p className="text-sm text-zinc-600 max-w-2xl mx-auto">
          Optional sync for couples and households keeps shopping lists aligned in real time.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-2xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-bold">
          Stop rebuilding your list every week
        </h2>

        <p className="text-zinc-600 text-sm">
          Let your routine automatically build your grocery list.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={APP_STORE_URL}
            className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-semibold"
          >
            🍎 Get StapleRun
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            className="bg-zinc-100 border border-zinc-200 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            📱 Get Android App
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 py-10 text-center">
        <p className="text-xs text-zinc-500 mb-4">
          Privacy-first • No signup required • Optional household sync
        </p>

        <div className="flex items-center justify-center gap-3 text-xs text-zinc-400">
          <a href="/privacy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
        </div>

        <p className="mt-4 text-[11px] text-zinc-300">
          © {new Date().getFullYear()} StapleRun
        </p>
      </footer>

    </div>
  );
}