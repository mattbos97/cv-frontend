import * as fs from "node:fs";
import ExperienceCard, {Experience} from "@/app/ui/ExperienceCard";

const prodriveDescriptionPath = "public/experience-description-prodrive.txt";
const prodriveDescription = fs.readFileSync(prodriveDescriptionPath, 'utf-8');

const experiences: Experience[] = [
    {
        company: "Prodrive technologies",
        jobTitle: ".NET Software engineer",
        startDate: "Feb 2021",
        endDate: "Dec 2024",
        description: prodriveDescription
    },
    {
        company: "Some other company",
        jobTitle: ".NET Software engineer",
        startDate: "Feb 2021",
        endDate: "Dec 2024",
        description: prodriveDescription
    }
];

export default function Page(){
    return(
        <div className={"flex flex-col"}>
            <h1>Work experience</h1>
            {experiences.map((exp) => <ExperienceCard key={exp.company} exp={exp}/>)}
        </div>
    );
}