import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import P1 from "../assets/P1.png";
import P3 from "../assets/P3.png";
import P2 from "../assets/P2.png";

const Projects = () => {
  const projects = [
    {
      name: "MNNIT Connect Hub",
      image: P1, // Replace with your image URL
      github: "https://github.com/rishirajca081/Project-2024", // Replace with your GitHub link
      liveDemo: "https://project-2024-chi.vercel.app/", // Replace with your live demo link
    },
    {
      name: "SuperStore Management System",
      
      image: P2, 
      github: "https://github.com/SonikaPanth/SuperStore", 
    //   liveDemo: "https://project2-demo.com", 
    },
    {
      name: "Todo App",
      image: P3, 
      github: "https://github.com/SonikaPanth/EliteFit_Task", 
      liveDemo: "https://elite-fit-task-ten.vercel.app/",  
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.name} thumbnail`}
                className="w-full h-54 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
