import Image from "next/image";
import projectsData from "../projects/projectsData.json";

// Your component code
function Projects() {
  return (
    <div>
      <h2 class="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins sm:pl-16 pl-[2rem]">
        Projects
      </h2>
      {projectsData.map((project) => (
        <div key={project.id} className="mb-4">
          {/* <Image
            src={project.image}
            alt={project.alt}
            className="mb-2"
            width={500}
            height={500}
          /> */}
          <h3 className="text-xl font-semibold text-slate-600">
            {project.title}
          </h3>
          <p className="text-slate-700">{project.description}</p>
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            Visit Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
          >
            GitHub
          </a>
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Watch Video
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
