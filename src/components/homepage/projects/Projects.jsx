import BrojectCard from './project-card';
import { projectsData } from '../../../../utils/data/projects-data';

function Projects() {

  return (
    <div id='projects' className="relative z-50 border-t my-12 lg:my-24 border-[#1da1f2]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>


      <div className="flex justify-center my-5 lg:py-8">

        <span className="w-fit bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent text-2xl font-bold tracking-wide">
          Projects
        </span>


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          projectsData.map((project, i) => (
            <BrojectCard project={project} key={i} />
          ))
        }
      </div>


    </div>
  );
};

export default Projects;