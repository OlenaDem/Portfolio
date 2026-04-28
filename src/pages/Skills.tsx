import { NavLink, useNavigate } from "react-router-dom";

type SkillGroup = {
  title: string;
  skills: string[];
  color: "cyan" | "indigo" | "purple";
};

const hardSkills: SkillGroup[] = [
  {
    title: "Frontend",
    color: "cyan",
    skills: ["HTML5 & CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "indigo",
    skills: ["Node.js", "Express.js", "PostgreSQL", "REST API"],
  },
  {
    title: "Tools",
    color: "purple",
    skills: ["GitHub", "Docker", "Figma", "Vite", "Linux", "Claude Code", "Claude AI"],
  },
];

const softSkills: string[] = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
];

const skillIcons: Record<string, string> = {
  JavaScript: "/JavaScript.svg",
  TypeScript: "/JavaScript.svg",
  "HTML5 & CSS3": "/html.svg",
  React: "/Logo.svg",
  PostgreSQL: "/sql.svg",
  Linux: "/linux.svg",
};

const colorStyles = {
  cyan: {
    pill: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/25",
    heading: "text-cyan-400",
    bar: "bg-cyan-400",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]",
  },
  indigo: {
    pill: "bg-indigo-500/15 text-indigo-300 border border-indigo-400/30 hover:bg-indigo-500/25",
    heading: "text-indigo-400",
    bar: "bg-indigo-400",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_45px_rgba(99,102,241,0.35)]",
  },
  purple: {
    pill: "bg-purple-500/15 text-purple-300 border border-purple-400/30 hover:bg-purple-500/25",
    heading: "text-purple-400",
    bar: "bg-purple-400",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]",
  },
};

const Skills = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-slate-100 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <NavLink
          to="/"
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 hover:text-white transition"
        >
          Web and Software Developer
        </NavLink>

        <div className="mt-6 mb-14 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="mt-3 text-white/40 text-sm tracking-widest uppercase">
            Technical Toolkit
          </p>
        </div>

        {/* Hard Skills */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6">
            Technical Skills
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hardSkills.map((group) => {
              const c = colorStyles[group.color];
              return (
                <div
                  key={group.title}
                  className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition duration-300 ${c.glow}`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-1 h-5 rounded-full ${c.bar}`} />
                    <h3 className={`text-xs uppercase tracking-widest font-semibold ${c.heading}`}>
                      {group.title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className={`flex items-center gap-1.5 px-3 py-1 text-sm rounded-full transition ${c.pill}`}
                      >
                        {skillIcons[skill] && (
                          <img
                            src={skillIcons[skill]}
                            alt={skill}
                            className="w-3.5 h-3.5 shrink-0"
                          />
                        )}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6">
            Soft Skills
          </p>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-6 py-2 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.8)] hover:scale-105 transition"
        >
          ← Back
        </button>
      </div>
    </section>
  );
};

export default Skills;
