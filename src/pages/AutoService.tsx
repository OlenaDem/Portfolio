import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Express.js",
  "PostgreSQL",
  "Sequelize",
  "React Big Calendar",
];

const customerFeatures = [
  "Book an appointment without registration",
  "Step-by-step booking wizard",
  "Select service, time slot, and contact details",
  "Fast and intuitive user experience",
];

const adminFeatures = [
  {
    title: "Secure Access",
    description:
      "No public login button — admin panel is accessed via a hidden route. Protected with cookies and hashed credentials.",
  },
  {
    title: "Dashboard",
    description:
      "Central workspace displaying all appointments. Manage orders, add mileage and service notes, and update status: New → In Progress → Completed.",
  },
  {
    title: "Smart Filters",
    description:
      "Filter appointments by mechanic, status, car number, or date — instantly find what you need.",
  },
  {
    title: "Booking Schedule",
    description:
      "Block or unblock specific time slots or full days with a reason. Full control over availability.",
  },
  {
    title: "Services Management",
    description:
      "Add, edit, or hide services in real time. Hidden services are immediately removed from the client side.",
  },
  {
    title: "Mechanics Management",
    description:
      "Add new mechanics, edit their details, and keep the team roster up to date.",
  },
];

const screenshots: string[] = [
  "/screenshots/JOM_1.png",
  "/screenshots/JOM_2.png",
  "/screenshots/JOM_3.png",
  "/screenshots/JOM_4.png",
  "/screenshots/JOM_5.png",
  "/screenshots/JOM_6.png",
  "/screenshots/JOM_7.png",
  "/screenshots/JOM_8.png",
  "/screenshots/JOM_9.png",
];

export default function AutoService() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">

        <div className="w-full text-left mb-4">
          <NavLink
            to="/"
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition"
          >
            Web and Software Developer
          </NavLink>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Auto<span className="text-cyan-400">Service</span>
        </h1>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
          Full-Stack Web Application
        </p>

        <p className="max-w-2xl text-white/70 text-base mb-12">
          A complete digital platform for car service centers — combining a
          simple customer booking experience with a powerful, secure admin panel
          for full operational control.
        </p>

        {/* Two sides overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          {/* Customer Side */}
          <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 text-left shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-cyan-400" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                Customer Side
              </h2>
            </div>
            <ul className="space-y-2">
              {customerFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Panel */}
          <div className="rounded-2xl bg-white/5 border border-indigo-400/20 p-6 text-left shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:shadow-[0_0_45px_rgba(99,102,241,0.25)] transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 rounded-full bg-indigo-400" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-indigo-400">
                Admin Panel
              </h2>
            </div>
            <p className="text-sm text-white/70">
              Secure, role-protected dashboard with full control over
              appointments, mechanics, services, and scheduling. No public
              access — admin route is hidden and guarded by cookie-based auth.
            </p>
          </div>
        </div>

        {/* Admin Features Grid */}
        <div className="w-full mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6 text-left">
            Admin Panel Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adminFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 text-left hover:border-indigo-400/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition duration-300"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="w-full mb-14">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_0_25px_rgba(99,102,241,0.1)]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-5 rounded-full bg-purple-400" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-purple-400">
                Tech Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="w-full mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6 text-left">
            Screenshots
          </p>

          {screenshots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenshots.map((img, i) => (
                <div
                  key={i}
                  className="w-full rounded-2xl overflow-hidden border border-white/20 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.4)] cursor-pointer hover:scale-[1.02] transition"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img}
                    alt="AutoService screenshot"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
              <p className="text-white/30 text-sm tracking-wide">Screenshots coming soon</p>
            </div>
          )}
        </div>

        {/* Image Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-50"
              >
                ✕
              </button>
              <img
                src={selectedImg}
                alt="AutoService screenshot enlarged"
                onClick={(e) => e.stopPropagation()}
                className="max-w-[95vw] max-h-[95vh] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400
                     px-6 py-2 font-semibold
                     shadow-[0_0_20px_rgba(56,189,248,0.8)]
                     hover:scale-105 transition mt-8"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}
