
const skills = [
    { title: "C#", level: "expert"},
    { title: "JavaScript", level: "intermediate"},
    { title: "HTML", level: "intermediate"},
    { title: "CSS", level: "intermediate"},
    { title: "Tailwind CSS", level: "intermediate"}
];

export default function Page(){
    return(
        <main className={"flex flex-1 flex-col"}>
            <h1>Skills</h1>
            {skills.map((skill) => {
                return(
                    <div key={skill.title}>
                        <h2>{skill.title}</h2>
                        <p>{skill.level}</p>
                    </div>
                );
            })}
        </main>
    );
}