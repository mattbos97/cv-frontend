import * as fs from "node:fs";

const prodriveDescriptionPath = "public/experience-description-prodrive.txt";
const prodriveDescription = fs.readFileSync(prodriveDescriptionPath, 'utf-8');

const experiences = [
    {
        company: "Prodrive technologies",
        jobTitle: ".NET Software engineer",
        startDate: "Feb 2021",
        endDate: "Dec 2024",
        description: prodriveDescription
    }
];

export default function Page(){
    return(
        <main className={"flex flex-1 flex-col"}>
            <h1>Work experience</h1>
            {experiences.map((exp) => {
                return(
                    <div key={exp.company}>
                        <h2>{exp.jobTitle}</h2>
                        <h3>{exp.company}</h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                );
            })}
        </main>
    );
}