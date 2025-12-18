import React, { useEffect, useMemo, useState } from "react";

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 26 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 6,
        size: 6 + Math.random() * 10,
        color: ["#fde68a", "#f9a8d4", "#c7d2fe", "#bbf7d0"][Math.floor(Math.random() * 4)],
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece, index) => (
        <span
          key={index}
          className="absolute block rounded-full opacity-80"
          style={{
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            background: piece.color,
            left: `${piece.left}%`,
            animation: `confetti-fall ${piece.duration}s ease-in-out infinite`,
            animationDelay: `${piece.delay}s`,
            top: "-48px",
          }}
        />
      ))}
    </div>
  );
}

function GradientBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/50 via-orange-300/30 to-amber-200/25 blur-[120px]" />
      <div className="absolute -right-16 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-400/35 to-sky-300/30 blur-[120px]" />
      <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-300/20 via-cyan-300/20 to-white/10 blur-[100px]" />
    </div>
  );
}

function PhotoFrame() {
  const photos = useMemo(() => {
    const modules = import.meta.glob("./assets/trn/*.{jpeg,jpg,png,webp}", { eager: true });
    return Object.entries(modules)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([, mod]) => (mod && mod.default) || mod);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!photos.length) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3200);
    return () => clearInterval(id);
  }, [photos]);

  if (!photos.length) return null;

  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
      <div className="relative w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl backdrop-blur-md aspect-[3/4] sm:aspect-[4/5]">
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`memory-${i}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            style={{ filter: "saturate(1.05)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-8 sm:pb-10">
          <p className="text-xs uppercase tracking-[0.24em] text-white/80">Happy Birthday to you</p>
          <p className="mt-2 text-3xl sm:text-4xl font-dancing text-amber-100 drop-shadow-lg">23rd level up</p>
        </div>
      </div>
      <div className="flex gap-2">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-6 rounded-full transition-all ${i === index ? "bg-amber-300" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

function HappyBirthdayPage({ onToggleMusic, isPlaying }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#3a0f33] via-[#4a1a5b] to-[#0b1026] text-white">
      <GradientBackdrop />
      <Confetti />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-rose-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-lg hover:shadow-pink-500/40"
            >
              See who’s behind this
              <span className="text-base leading-none">↗</span>
            </a>
            {onToggleMusic && (
              <button
                type="button"
                onClick={onToggleMusic}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/15"
              >
                {isPlaying ? "Pause music" : "Play music"}
              </button>
            )}
          </div>
        </div>

        <header className="text-center space-y-5">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-rose-200 drop-shadow">
            Happy Birthday to you
          </h1>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 shadow-lg">
            23rd level up
          </div>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/85 leading-relaxed">
            Best wishes from me — may today wrap you in the brightest colors, the softest laughs, and the confidence to
            chase every spark that excites you.
          </p>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
            Here’s to a new chapter filled with brighter mornings, louder laughs, and the courage to chase every idea
            you’ve been holding onto. May this year feel lighter, kinder, and even more you.
          </p>
        </header>

        <PhotoFrame />

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Today’s note</p>
            <p className="text-xl font-playfair text-white">
              Today is your day. Celebrate it without any stress; that’s why I sent this wish. This is a pretty little
              gift from me just for you—happy birthday, love you. If you feel good, no need to reply; just hold the
              message in your heart. If you see this, a single tap on the heart is enough. Finally, happy birthday,
              love.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HappyBirthdayPage;
