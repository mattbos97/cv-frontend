
const skills = [
    { title: "C#"},
    { title: "JavaScript"},
    { title: "HTML"},
    { title: "CSS"},
    { title: "Tailwind CSS"}
];

export default function Page(){
    return(
        <main className={"flex flex-1 flex-col"}>
            <h1>Skills</h1>
            {skills.map((skill) => {
                return(
                    <div key={skill.title}>
                        <h2>{skill.title}</h2>
                    </div>
                );
            })}
        </main>
    );
}