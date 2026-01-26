import { NavLink } from "react-router-dom";
import gears from "../assets/gears.png";
import giraffe from "../assets/giraffe.png";
import { useState } from "react";
import ContactMe from "../components/Contactme";
import profile from "../assets/photo.jpeg";
import projects from "../assets/projects.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white scale-95 md:scale-100 origin-top">
      {/* HERO TEXT */}
      <div className="relative z-10 max-w-4xl px-6 pt-20 md:px-16 md:pt-28">
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60">
          Front-End Developer
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to <br />
          <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            My Portfolio
          </span>
        </h1>

        {/* Glass Card */}
        <div className="mt-8 mx-auto w-full max-w-xl md:max-w-2xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-6 md:px-12 md:py-8 text-left shadow-[0_0_35px_rgba(99,102,241,0.45)]">
          <h3 className="text-lg md:text-xl font-semibold">
            Frontend-focused developer building modern UIs, with a growing
            interest and hands-on experience in backend technologies.
          </h3>
          <p className="mt-1 text-sm md:text-base text-white/70">
            Building responsive and interactive web applications
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.8)] transition hover:scale-105 active:scale-95"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* GEARS */}
      <img
        src={gears}
        alt="gears"
        className="
          absolute z-10
          top-40 -right-12.5
          w-65
          sm:top-25 sm:w-125 md:right-15 md:w-142.5
          animate-spinSlow
          drop-shadow-[0_0_50px_rgba(99,102,241,0.8)]
          transition-all duration-300"
      />

      {/* GIRAFFE */}
      <img
        src={giraffe}
        alt="giraffe"
        className="
          absolute
          z-20
          select-none
          top-72
          -right-20
          h-70
          opacity-70
          sm:top-90
          sm:-right-30
          sm:h-142.5
          sm:opacity-100
          drop-shadow-[0_0_50px_rgba(99,102,241,0.8)]
          transition-all duration-300
        "
      />

      {/* BOTTOM CARDS */}
      <div className="relative z-10 mt-10 mb-32 px-6 md:px-16">
        <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* ABOUT */}
          <NavLink to="/about" className="group">
            <div className="relative text-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300">
              <img
                src={profile}
                alt="profile"
                className="mx-auto mb-3 w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <h3 className="text-xl md:text-2xl font-semibold">About Me</h3>
              <p className="text-white/60 text-sm md:text-base">Who I am</p>
            </div>
          </NavLink>

          {/* SKILLS */}
          <NavLink to="/skills" className="group">
            <div className="relative text-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300">
              <div className="mb-6 flex flex-wrap justify-center gap-3">
                {["/Logo.svg", "/JavaScript.svg", "/sql.svg", "/html.svg"].map(
                  (icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_6px_rgba(255,200,120,0.8)] group-hover:scale-110 transition"
                      alt="skill"
                    />
                  ),
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">My Skills</h3>
              <p className="text-white/60 text-sm md:text-base">What I do</p>
            </div>
          </NavLink>

          {/* PROJECTS */}
          <NavLink to="/projects" className="group">
            <div className="relative text-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300">
              <img
                src={projects}
                alt="projects"
                className="mx-auto mb-3 w-8 h-8 md:w-8 md:h-9 rounded-full object-cover"
              />
              <h3 className="text-xl md:text-2xl font-semibold">Projects</h3>
              <p className="text-white/60 text-sm md:text-base">My work</p>
            </div>
          </NavLink>
        </div>
      </div>

      {/* ContactMe Modal */}
      <ContactMe isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
