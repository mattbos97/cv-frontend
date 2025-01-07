import Link from "next/link";
import LinkButton from "@/app/ui/LinkButton";
import ExperienceCard, {Experience} from "@/app/ui/ExperienceCard";

const templateExperience: Experience = {
    jobTitle: "Software engineer",
    company: "Some company",
    startDate: "Feb 2021",
    endDate: "Dec 2024",
    description: "Describe the job here in a long peace of text that can span mulitple lines."
}

export default function Page(){
    return(
        <main className={"w-full h-full grid grid-cols-3 p-12"}>
            <div className={"flex flex-col items-center space-y-4"}>
                <h1 className={"underline underline-offset-8"}>Colors</h1>
                <div>
                    <p>Primary</p>
                    <div className={"w-24 h-24 bg-dark-primary border-white border-2"}/>
                </div>
                <div>
                    <p>Secondary</p>
                    <div className={"w-24 h-24 bg-dark-secondary border-white border-2"}/>
                </div>
                <div>
                    <p>Yellow</p>
                    <div className={"w-24 h-24 bg-yellow-400 border-white border-2"}/>
                </div>
                <div>
                    <p>Blue</p>
                    <div className={"w-24 h-24 bg-blue-500 border-white border-2"}/>
                </div>
            </div>
            <div className={"flex flex-col items-center space-y-4"}>
                <h1 className={"underline underline-offset-8"}>Buttons</h1>
                <LinkButton text={"Primary"} href={"/styles"} type={"primary"}/>
                <LinkButton text={"Secondary"} href={"/styles"} type={"secondary"}/>
            </div>
            <div>
                <h1>Components</h1>
                <div>
                    <p>Experience card</p>
                    <ExperienceCard exp={templateExperience}/>
                </div>
            </div>
        </main>
    );
}