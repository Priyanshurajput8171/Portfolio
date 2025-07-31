import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "ritHackathon",
    Description:
      "A hackathon project focused on creating innovative solutions for real-world problems.",
    image: "./src/ProjectsImg/Rit.png",
    tags: ["React", "tailwind", "javascript"],
    github: "#",
  },
  {
    id: 2,
    title: "DitHackathon",
    Description:
      "A hackathon project focused on creating innovative solutions for real-world problems.",
    image: "./src/ProjectsImg/Dit.png",
    tags: ["React", "tailwind", "javascript"],
    github: "#",
  },
  {
    id: 1,
    title: "First Portfolio",
    Description:
      "A personal portfolio showcasing my skills and projects. when i was in 1st year of my college.",
    image: "./src/ProjectsImg/firstPortfolio.png",
    tags: ["React", "tailwind", "javascript"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Features
          <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my projects that showcase my skills and creativity in web
          development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shoadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className="px-2 py-1 font-medium text-xs border rounded-full bg-secondary text-secondary-foreground"
                      key={tagIndex}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.Description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-foreground hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Priyanshurajput8171" className="cosmic-button text-[16px] flex items-center w-fit mx-auto gap-2">
            Check My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
