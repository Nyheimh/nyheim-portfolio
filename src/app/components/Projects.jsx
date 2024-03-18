import Image from "next/image";
import projectsData from "../projects/projectsData.json";

function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 sm:mt-0">
      <div className="sm:col-span-3">
        <p className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins sm:pl-16 pl-[2rem]">
          What I have worked on
        </p>
        <h2 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins sm:pl-16 pl-[2rem]">
          Projects
        </h2>
      </div>
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {project.image && (
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={project.image}
                  alt={project.alt}
                  width={500}
                  height={400}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {project.subtitle}
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {project.title}
                </a>
                <p className="mt-2 text-slate-500">{project.description}</p>
                {project.youtube ? (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline block mt-2"
                  >
                    Watch Video
                  </a>
                ) : (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-2"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block mt-2"
                    >
                      Live site
                    </a>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
