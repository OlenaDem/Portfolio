import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const infoCards = [
  { label: "Location", value: "Germany" },
  { label: "Focus", value: "Full-Stack Development" },
];

const getTimeSinceYearStart = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const diff = Date.now() - startOfYear.getTime();
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  return {
    days: Math.floor(totalHours / 24),
    hours: totalHours % 24,
    minutes: totalMinutes % 60,
    seconds: totalSeconds % 60,
  };
};

export default function AboutMe() {
  const navigate = useNavigate();
  const [time, setTime] = useState(getTimeSinceYearStart());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeSinceYearStart()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 md:px-16 py-20 flex flex-col items-center">
      <div className="w-full text-left mb-4">
        <NavLink
          to="/"
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition cursor-pointer"
        >
          Web and Software Developer
        </NavLink>
      </div>

      <div className="mb-8">
        <img
          src="/photo.jpeg"
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white/30 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Aljona
        </span>
      </h1>
      <p className="text-white/60 text-center mb-6">
        Web and Software Developer
      </p>

      <div className="max-w-2xl text-center space-y-4 mb-8">
        <p className="text-white/80">
          I build clean, and visually strong web applications.
        </p>
        <p className="text-white/60">
          Skilled in React, Next.js, TypeScript, Tailwind CSS, Node.js, and
          PostgreSQL. I bring creativity to every project — caring about how it
          works and how it looks. I work efficiently using modern AI tools like
          Claude Code to research, debug, and ship faster without sacrificing
          quality. Detail-oriented, self-driven, and ready to contribute from
          day one.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {infoCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl bg-white/10 border border-white/20 px-6 py-4 backdrop-blur-md text-center min-w-35"
          >
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{card.label}</p>
            <p className="text-sm font-semibold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 rounded-xl bg-white/10 border border-white/20 px-8 py-4 backdrop-blur-md text-center">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Coding this year</p>
        <p className="text-lg font-semibold tabular-nums">
          {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
        </p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.8)] hover:scale-105 transition"
      >
        ← Back
      </button>
    </section>
  );
}
