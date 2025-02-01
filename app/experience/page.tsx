import ExperienceCard from "@/app/ui/components/ExperienceCard";
import experiences from '@/app/lib/experiences.json'


export default function Page() {
    return (
        <div
            className={
                "flex flex-col " +
                "w-full " +
                "m-8 p-4 " +
                "rounded-lg"
            }>
            <h1>Work experience</h1>
            {experiences.map(exp =>
                <ExperienceCard
                    key={exp.company}
                    title={exp.title}
                    company={exp.company}
                    start={exp.start}
                    end={exp.end}
                    description={exp.description} />)}
        </div>
    );
}