import skills from '@/app/lib/data/skills.json'
import SkillCard from "@/app/ui/components/SkillCard";

export default function Page(){
    return(
        <div className={'flex flex-col flex-1 p-4'}>
            <div className={"flex flex-row justify-center items-center flex-wrap"}>
                {skills.map((skill, index) => <SkillCard key={index} name={skill.name} level={skill.level}/>)}
            </div>
        </div>
    );
}