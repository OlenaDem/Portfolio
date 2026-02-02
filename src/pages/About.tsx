import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const navigate = useNavigate();

  const getTimeSinceYearStart = () => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const now = new Date();
    const diff = now.getTime() - startOfYear.getTime();

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    return {
      years: 0,
      months: 0,
      days: totalDays,
      hours: totalHours % 24,
      minutes: totalMinutes % 60,
      seconds: totalSeconds % 60,
    };
  };

  const [timeSinceYearStart, setTimeSinceYearStart] = useState(
    getTimeSinceYearStart(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceYearStart(getTimeSinceYearStart());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 md:px-16 py-20 flex flex-col items-center">
      <div className="mb-8">
        <img
          src="/photo.jpeg"
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white/30 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] "
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Aljona
        </span>
      </h1>
      <p className="text-white/60 text-center mb-6">Front-End Developer</p>

      <div className="max-w-2xl text-center space-y-4 mb-8">
        <p className="text-white/80">
          I recently completed my studies in web development and am passionate
          about building modern, responsive, and interactive web applications.
        </p>
        <p className="text-white/60">
          I have hands-on experience with React, JavaScript, HTML, and CSS
          through personal projects and coursework. I'm eager to learn and grow
          as a developer.
        </p>
      </div>

      <div className="mb-10">
        <div className="rounded-xl bg-white/10 border border-white/20 p-4 backdrop-blur-md text-center">
          <h3 className="text-sm text-white/60 mb-2">Experience</h3>
          <p className="text-lg font-semibold">
            {timeSinceYearStart.days}d {timeSinceYearStart.hours}h{" "}
            {timeSinceYearStart.minutes}m {timeSinceYearStart.seconds}s
          </p>
        </div>
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
