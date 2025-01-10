
type SkillLevel = 'beginner' | 'intermediate' | 'expert' | 'pro';
const skillLevelToPercentage: Record<SkillLevel, string> = {
    beginner: '25',
    intermediate: '50',
    expert: '75',
    pro: '100'
}

export interface SkillCardProps{
    name: string,
    level: SkillLevel
}

function ProgressBar(props: { skillLevel: SkillLevel }) {
    return <div className={"w-full h-2 bg-gray-600 rounded-full"}>
        <div
            className={"h-full rounded-full bg-accent-yellow"}
            style={{
                width: skillLevelToPercentage[props.skillLevel] + "%"
            }}
        >
            <div className={"h-full w-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-300"}/>
        </div>
    </div>;
}

function SkillLevelDescription(props: { skillLevel: SkillLevel }) {
    return <div className={"w-full flex justify-between"}>
                <span className={"text-gray-400 text-xs"}>Skill level:
                    <span className={"text-accent-yellow"}>{props.skillLevel}</span>
                </span>
        <span className={"text-xs text-gray-400"}>{skillLevelToPercentage[props.skillLevel]}%</span>
    </div>;
}

export default function SkillCard({name, level}: SkillCardProps) {
    return (
        <div className={"bg-dark-secondary rounded-xl w-[350px] p-4 flex flex-col justify-around"}>
            <span className={'text-accent-yellow text-xl pb-4'}>{name}</span>
            <ProgressBar skillLevel={level}/>
            <SkillLevelDescription skillLevel={level}/>
        </div>
    );
}