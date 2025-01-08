import {levelToPercentage, Skill} from "@/app/lib/Skill";

const levels = Object.keys(levelToPercentage);

function LevelAndStripe({text}: {text:string}){
    return(
        <>
            <span className={'w-px h-2 bg-white'}/>
            <p>{text}</p>
        </>
    );
}

export default function SkillLevelBar({skill}: { skill: Skill}){
    return(
        <div className={'flex flex-col'}>
            <div className={"flex-none w-auto mx-4 bg-gray-600 rounded-full h-2"}>
                <div className={"bg-accent-yellow rounded-full h-2"} style={{width: `${levelToPercentage[skill.level]}%`}}/>
            </div>
            <div className={'flex flex-row mx-4 justify-between'}>
                {levels.map((_, index) => <span key={index} className={'w-px h-2 bg-white'}/>)}
            </div>
            <div className={'flex flex-row justify-between'}>
                {levels.map((l) => <p className={"text-[10px]"} key={l}>{l}</p>)}
            </div>
        </div>
    );
}