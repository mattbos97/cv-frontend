import React from "react";
import projects from '@/app/lib/data/projects.json'
import ProjectCard from "@/app/ui/components/ProjectCard";
import InfoMessage from "@/app/ui/components/InfoMessage";


const Page: React.FC = () => {
    return(
        <div className={`flex flex-1 flex-col justify-start items-center md:w-[60vw] w-full`}>
            <InfoMessage message={'Click on the "+" icon to read more.'}/>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectTitle={project.title}
                    projectFor={project.for}
                    projectDescription={project.description}/>
            ))}
        </div>
    );
}

export default Page;