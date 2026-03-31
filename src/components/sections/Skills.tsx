interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Araçlar",
    skills: ["Git", "GitHub", "Vite", "VS Code", "npm"],
  },
  {
    name: "Öğreniyor",
    skills: ["Node.js", "Next.js", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900
          dark:text-white mb-10">
          Yetenekler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.name}>
              <h3 className="text-lg font-semibold text-gray-700
                dark:text-gray-300 mb-4 text-center">
                {category.name}
              </h3>
              <ul
                className="flex flex-wrap gap-2 justify-center"
                role="list"
                aria-label={`${category.name} becerileri`}
              >
                {category.skills.map(skill => (
                  <li
                    key={skill}
                    className="bg-blue-800 text-white dark:bg-blue-700
                      px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
