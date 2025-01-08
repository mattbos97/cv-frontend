
export interface Experience{
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string
}

export default function ExperienceCard({exp} :{exp: Experience}){
    return(
        <div>
            <h3>{exp.jobTitle}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
        </div>
    );
}