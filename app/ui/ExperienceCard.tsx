
export interface Experience{
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string
}

export default function ExperienceCard({exp} :{exp: Experience}){
    return(
        <div className={"border-dark-secondary p-8"}>
            <h2>{exp.jobTitle}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p className={"py-4"}>{exp.description}</p>
        </div>
    );
}