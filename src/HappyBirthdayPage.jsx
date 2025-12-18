import React, { useMemo } from "react";

const highlights = [
  {
    title: "You shine without trying",
    copy:
      "You turn ordinary rooms into bright ones. The way you listen, laugh, and show up makes people feel at ease.",
    accent: "from-amber-300/25 via-pink-400/15 to-purple-400/10",
  },
  {
    title: "Curiosity keeps you moving",
    copy:
      "You chase ideas, collect stories, and never stop learning. That spark is rare and worth protecting.",
    accent: "from-sky-300/20 via-cyan-300/10 to-emerald-300/15",
  },
  {
    title: "Your kindness is loud",
    copy:
      "You make space for others, even on the days you feel quiet. The world is softer because you are in it.",
    accent: "from-rose-300/25 via-orange-200/15 to-yellow-200/15",
  },
];

const wishes = [
  {
    title: "More wonder",
    detail:
      "May you notice the small magic in slow mornings, in songs you replay, and in the quiet wins no one else sees.",
  },
  {
    title: "Brave leaps",
    detail:
      "May this year give you the confidence to try the ideas that have been waiting on the edge of your notebook.",
  },
  {
    title: "Unshakable joy",
    detail:
      "May laughter keep sneaking up on you, and may you feel celebrated on ordinary Tuesdays, not just today.",
  },
];

const dayPlan = [
  {
    title: "A slow start",
    detail: "Sleep in, stretch, and let sunlight do the talking. Your only task is to feel unrushed.",
  },
  {
    title: "Golden afternoon",
    detail: "Pick one thing that feels like summer: a walk, a favourite cafe, or a playlist at full volume.",
  },
  {
    title: "Night to remember",
    detail: "Light a candle, make a wish, and write one promise to yourself. This story is yours to steer.",
  },
];

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

function HighlightCard({ title, copy, accent }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-5 shadow-lg backdrop-blur-md`}>
      <p className="text-sm uppercase tracking-[0.18em] text-white/60">Why you are celebrated</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/80 leading-relaxed">{copy}</p>
    </div>
  );
}

function WishCard({ title, detail }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{detail}</p>
    </div>
  );
}

function DayPlanCard({ title, detail }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur-md">
      <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-white/10 text-center text-sm font-semibold uppercase tracking-wide text-white/80 flex items-center justify-center">
        {title.split(" ")[0]}
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-sm text-white/75 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

function HappyBirthdayPage({ onToggleMusic, isPlaying }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b1026] text-white">
      <GradientBackdrop />
      <Confetti />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          Today is all about you
        </div>

        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Birthday broadcast</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-dancing text-amber-200 drop-shadow">
            Happy Birthday to you
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/80 leading-relaxed">
            Pause and look around. The people, places, and quiet routines you have built are cheering for you today.
            Take a deep breath, make a wish, and let this year unfold with more ease, more light, and more laughter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              You deserve to be celebrated
            </span>
            <span className="rounded-full border border-white/15 bg-gradient-to-r from-pink-400/25 to-amber-300/25 px-3 py-1 text-xs font-semibold text-white/90">
              Another lap around the sun
            </span>
            {onToggleMusic && (
              <button
                type="button"
                onClick={onToggleMusic}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 hover:bg-white/15"
              >
                {isPlaying ? "Pause background music" : "Play background music"}
              </button>
            )}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md lg:col-span-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">An open letter</p>
              <span className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-semibold text-amber-100">
                For today
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-playfair text-white">You are the reason this day feels brighter</h2>
            <div className="mt-5 space-y-3 text-base text-white/80 leading-relaxed">
              <p>
                Every chapter you have written has been filled with patience, grit, and care. You have walked through
                tough days and made them look graceful, and you have turned ordinary moments into memories that people
                replay when they need comfort.
              </p>
              <p>
                I hope you feel how loved you are, not just when candles are lit but in the quiet seconds in between.
                Keep choosing the adventures that make you feel alive. Keep choosing yourself.
              </p>
              <p className="text-white">
                Happy birthday. May this year be full of slow mornings, fearless choices, and the right people cheering
                you on.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Day plan</p>
              <div className="mt-3 space-y-3">
                {dayPlan.map((item) => (
                  <DayPlanCard key={item.title} title={item.title} detail={item.detail} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-amber-300/30 p-5 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Little reminders</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80 leading-relaxed">
                <li>• You are allowed to celebrate your wins out loud.</li>
                <li>• You deserve people who make you feel rested.</li>
                <li>• You are already enough on days you do nothing.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <HighlightCard key={item.title} title={item.title} copy={item.copy} accent={item.accent} />
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Wishes for the year ahead</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              Keep this close
            </span>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {wishes.map((item) => (
              <WishCard key={item.title} title={item.title} detail={item.detail} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HappyBirthdayPage;
