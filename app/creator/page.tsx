import TypeWriter from "@/app/ui/TypeWriter";

export default function Creator() {

    return (
        <div className={'flex flex-1 justify-center items-center'}>
            <TypeWriter text={'hello, and welcome.'} cursor={true}/>
        </div>
    );
}