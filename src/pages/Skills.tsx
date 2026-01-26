import { useNavigate } from "react-router-dom";

type SkillGroup = {
  title: string;
  skills: string[];
};

const hardSkills: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST API"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Docker", "Figma", "Vite"],
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

const Skills = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-linear-to-br from-[#2b1055] via-[#1b1f5c] to-[#090d2b] text-slate-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center">
          Skills
        </h1>

        {/* Hard Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white-400">
            Hard Skills
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hardSkills.map((group) => (
              <div
                key={group.title}
                className="relative text-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full shadow"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-white-400">
            Soft Skills
          </h2>
          <div className="relative text-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-cyan-500/10 border border-white/20 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition duration-300">
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {softSkills.map((skill) => (
                <li key={skill} className="rounded-xl px-6 py-3 shadow">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-15">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 
              px-6 py-2 font-semibold 
              shadow-[0_0_20px_rgba(56,189,248,0.8)] 
              hover:scale-105 transition"
        >
          ← Back
        </button>
      </div>
    </section>
  );
};

export default Skills;
