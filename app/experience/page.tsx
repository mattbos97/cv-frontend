import ExperienceCard from "@/app/ui/components/ExperienceCard";
import experiences from '@/app/lib/data/experiences.json'
import InfoMessage from "@/app/ui/components/InfoMessage";


export default function Page() {
    return (
        <div className={'flex flex-col flex-1'}>
            <div className={'flex justify-center items-center'}>
                <InfoMessage message={'Click on the "+" icon to read more.'}/>
            </div>
            <div
                className={`
                flex flex-col justify-start items-center
                w-full 
                p-4
                rounded-lg`}>
                {experiences.map(exp =>
                    <ExperienceCard
                        key={exp.company}
                        title={exp.title}
                        company={exp.company}
                        start={exp.start}
                        end={exp.end}
                        description={exp.description}/>)}
            </div>
        </div>
    );
}