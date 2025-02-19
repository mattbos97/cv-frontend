import Image, {StaticImageData} from "next/image";

const TextAndImage = (props: {text: string, imgSource: StaticImageData, imgAlt: string}) => {
    return(
        <div className={`
        flex md:flex-row flex-col md:w-[80vw] justify-center items-stretch my-4`}>
            {/* Text container */}
            <div className={`
            bg-background-accent-1 rounded-xl
            md:w-3/4
            p-4`}>
                <span>{props.text}</span>
            </div>

            {/* Image container */}
            <div className={`
            md:w-1/4 md:ml-2`}>
                <Image className={'rounded-xl'} src={props.imgSource} alt={props.imgAlt} />
            </div>
        </div>
    );
}

export default TextAndImage;