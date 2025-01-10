import SkillCard, {SkillCardProps} from '@/app/ui/SkillCard';

const skills: SkillCardProps[] = [
    { name: 'C#', level: 'expert'},
    { name: 'TypeScript', level: 'intermediate'},
    { name: 'Tailwind CSS', level: 'intermediate'}
]

export default function Page(){
    return(
        <div className={'flex flex-col p-4'}>
            <h1>Skills</h1>
            <div className={"flex flex-row flex-wrap py-4 space-x-4"}>
                {skills.map((skill) => <SkillCard key={skill.name} name={skill.name} level={skill.level}/>)}
            </div>
        </div>
    );
}