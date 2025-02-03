import React from "react";
import experiences from "@/app/lib/experience/experiences.json";
import ExperienceCard from "@/app/ui/components/ExperienceCard";
import PageContainer from "@/app/ui/components/PageContainer";


const Page: React.FC = () => {
    return(
        <PageContainer pageTitle={'Work experience'}>
            <div
                className={`
                flex flex-col justify-center
            w-full 
            p-4
            rounded-lg`}>
                {experiences.map((exp, index) =>
                    <ExperienceCard
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        start={exp.start}
                        end={exp.end}
                        description={exp.description}/>)}
            </div>
        </PageContainer>
    );
}

export default Page;