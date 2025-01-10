import SkillCard from "@/app/ui/SkillCard";

export default function Creator(){
    return(
        <div className={'flex flex-1 justify-center items-center'}>
            <SkillCard name={'C#'} level={'intermediate'}/>
        </div>
    );
}