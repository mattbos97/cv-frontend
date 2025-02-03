import SkillCard, {SkillCardProps} from '@/app/ui/components/SkillCard';
import PageContainer from "@/app/ui/components/PageContainer";

const skills: SkillCardProps[] = [
    { name: 'C#', level: 'expert'},
    { name: 'TypeScript', level: 'intermediate'},
    { name: 'Tailwind CSS', level: 'intermediate'}
]

export default function Page(){
    return(
        <PageContainer pageTitle={'Skills'}>
            <div className={'flex flex-col p-4'}>
                <div className={"flex flex-row flex-wrap justify-center items-center"}>
                    {skills.map((skill) => <SkillCard key={skill.name} name={skill.name} level={skill.level}/>)}
                </div>
            </div>
        </PageContainer>
    );
}