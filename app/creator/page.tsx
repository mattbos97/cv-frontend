'use client';
import projects from '@/app/lib/projects/projects.json'
import ProjectCard from "@/app/ui/components/ProjectCard";

export default function Creator() {
    return (
        <div className={'flex w-full h-full justify-center items-center'}>
            {projects.map((project, index) => (
                <ProjectCard key={index} projectTitle={project.title} projectFor={project.for} projectDescription={project.description}/>
            ))}
        </div>
    );
}