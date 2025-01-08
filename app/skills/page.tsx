import SkillCard from '@/app/ui/SkillCard';
import {Skill} from "@/app/lib/Skill";

const skills: Skill[] = [
    { name: 'C#', level: 'expert'},
    { name: 'TypeScript', level: 'intermediate'},
    { name: 'Tailwind CSS', level: 'intermediate'}
]

export default function Page(){
    return(
        <div className={'flex flex-col p-4'}>
            <h1>Skills</h1>
            <div className={"flex flex-row flex-wrap py-4 space-x-4"}>
                {skills.map((skill) => <SkillCard key={skill.name} skill={skill}/>)}
            </div>
        </div>
    );
}