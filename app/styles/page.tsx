import LinkButton from "@/app/ui/LinkButton";

const colors = [
    {type: "primary background", color: "bg-dark-primary", code: "000000"},
    {type: "secondary background", color: "bg-dark-secondary", code: "151515"},
    {type: "tertiary background", color: "bg-dark-tertiary", code: "303030"},
    {type: "primary color", color: "bg-accent-yellow", code: "facc15"},
    {type: "secondary color", color: "bg-accent-blue", code: "3b82f6"}
];

export default function Page(){
    return(
        <main className={"w-full h-full grid grid-cols-3 p-12"}>
            <div className={"flex flex-col items-center space-y-4"}>
                <h1 className={"underline underline-offset-8"}>Colors</h1>
                {colors.map((color) => {
                    return(
                        <div key={color.type} className={'flex flex-row items-center space-x-4'}>
                            <div className={`w-24 h-24 border-white border-2 rounded-md ${color.color}`}/>
                            <p>#{color.code}</p>
                        </div>
                    );
                })}
            </div>
            <div className={"flex flex-col items-center space-y-4"}>
                <h1 className={"underline underline-offset-8"}>Buttons</h1>
                <LinkButton text={"Primary"} href={"/styles"} type={"primary"}/>
                <LinkButton text={"Secondary"} href={"/styles"} type={"secondary"}/>
            </div>
            <div>
            </div>
        </main>
    );
}