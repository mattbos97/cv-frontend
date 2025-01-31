
export interface Experience{
    title: string,
    company: string,
    start: string,
    end: string,
    description: string
}

export default function ExperienceCard(exp: Experience){
    return(
        <div className={"border-dark-secondary p-8"}>
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.start} - {exp.end}</p>
            <p className={"py-4 whitespace-pre-wrap"}>{exp.description}</p>
        </div>
    );
}