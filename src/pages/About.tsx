// import gears from "../assets/gears.png";

// export default function About() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white scale-95 md:scale-100 origin-top">
//       {/* HERO TEXT */}
//       <div className="relative z-10 max-w-4xl px-6 pt-20 md:px-16 md:pt-28">
//         <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60">
//           About Me
//         </span>

//         <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
//           Front-End Developer <br />
//           <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//             focused on modern UI
//           </span>
//         </h1>

//         {/* Glass Card */}
//         <div className="mt-8 mx-auto w-full max-w-xl md:max-w-2xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-6 md:px-12 md:py-8 text-left shadow-[0_0_35px_rgba(99,102,241,0.45)]">
//           <img
//             src="/me.png"
//             alt="Me"
//             className="relative h-105 w-[320px] rounded-3xl object-cover shadow-xl"
//           />
//           <h3 className="text-lg md:text-xl font-semibold">
//             Creative Front-End Developer
//           </h3>

//           <p className="mt-1 text-sm md:text-base text-white/70"></p>
//         </div>
//       </div>

//       {/* GEARS */}
//       <img
//         src={gears}
//         alt="gears"
//         className="
//             absolute z-10
//             top-40 -right-12.5
//             w-65

//             sm:top-25 sm:w-125 md:right-15 md:w-142.5

//             animate-spinSlow
//             drop-shadow-[0_0_50px_rgba(99,102,241,0.8)]
//             transition-all duration-300"
//       />

//       <div className="relative z-10 mt-10 mb-32 px-6 md:px-16">
//         <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"></div>
//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const navigate = useNavigate();
  const [timeSinceYearStart, setTimeSinceYearStart] = useState({});

  // Update timer every second
  useEffect(() => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of current year

    const interval = setInterval(() => {
      const now = new Date();
      let diff = now - startOfYear; // milliseconds

      // Calculate time components
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const years = 0; // since we start at Jan 1st, years = 0
      const months = 0; // simplified, could calculate exact months if needed
      const days = totalDays;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimeSinceYearStart({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 md:px-16 py-20 flex flex-col items-center">
      {/* SMALL PROFILE PICTURE */}
      <div className="mb-8 ">
        <img
          src="/photo.jpeg" // 👈 Replace with your photo
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white/30  shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300"
        />
      </div>

      {/* NAME AND TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Aljona
        </span>
      </h1>
      <p className="text-white/60 text-center mb-6">Front-End Developer</p>

      {/* DESCRIPTION */}
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

      {/* INFO CARDS */}
      <div className="mb-10 ">
        {/* TIMER CARD */}
        <div className="rounded-xl bg-white/10 border border-white/20 p-4 backdrop-blur-md text-center">
          <h3 className="text-sm text-white/60 mb-2">Expirience</h3>
          <p className="text-lg font-semibold">
            {timeSinceYearStart.days}d {timeSinceYearStart.hours}h{" "}
            {timeSinceYearStart.minutes}m {timeSinceYearStart.seconds}s
          </p>
        </div>
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.8)] hover:scale-105 transition"
      >
        ← Back
      </button>
    </section>
  );
}
