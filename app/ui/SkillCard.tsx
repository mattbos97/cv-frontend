import SkillLevelBar from "@/app/ui/SkillLevelBar";
import {Skill} from "@/app/lib/Skill";

export default function SkillCard({ skill }: {skill: Skill}){
    return(
        <div className={"bg-dark-secondary rounded-xl w-[350px] h-20 p-2"}>
            <p className={"p-2"}>{skill.name}</p>
            <SkillLevelBar skill={skill}/>
        </div>
    );
}