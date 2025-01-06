
import { FaGraduationCap } from "react-icons/fa";

const qualifications = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Motilal Nehru National Institute of Technology, Allahabad",
    duration: "2022 - 2025",
  },
  {
    title: "Bachelor of Science (B.Sc)",
    institution: "St.Paul Institute Of Professional Studies",
    duration: "2018 - 2021",
  },
];

const Qualification = () => {
  return (
    <section className="py-12 bg-slate-100 text-black" id="qualification">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Qualification</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gray-700"></div>
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="flex items-start mb-12 relative pl-16"
            >
              {/* Icon */}
              <div className="absolute left-4 top-0 bg-gray-800 p-2 rounded-full">
                <FaGraduationCap className="text-indigo-500 w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
