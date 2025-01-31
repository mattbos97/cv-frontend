import ExperienceCard from "@/app/ui/ExperienceCard";
import experiences from '@/app/experience/experiences.json'


export default function Page(){
    return(
        <div className={"flex flex-col"}>
            <h1>Work experience</h1>
            {experiences.map(exp =>
            <ExperienceCard
                key={exp.company}
                title={exp.title}
                company={exp.company}
                start={exp.start}
                end={exp.end}
                description={exp.description}/>)}
        </div>
    );
}