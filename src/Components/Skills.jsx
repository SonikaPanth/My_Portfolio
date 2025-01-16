const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" }, // React (Atom symbol)
    { name: "Tailwind", icon: "🛠️" }, // Tailwind (Wind symbol)
    { name: "JavaScript", icon: "💻" }, // JavaScript (Laptop symbol for coding)
    { name: "Data Structures", icon: "📚" }, // Data Structures (Books symbol)
    { name: "HTML", icon: "🌐" }, // HTML (Globe symbol representing the web)
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
