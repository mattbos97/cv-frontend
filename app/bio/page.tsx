import bioJson from '@/app/bio/bio.json'

export default function Page(){



    return(
        <div className={"flex flex-col justify-center"}>
            <h1>About me</h1>
            <pre className={'whitespace-pre-wrap'}>
                {bioJson.content}
            </pre>
        </div>
    );
}