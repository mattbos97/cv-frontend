import bio from '@/app/bio/bio.json'

const AboutMeCard = () => {
    return(
        <div className={'m-8 p-4 bg-background-accent-1 rounded-lg md:w-[60vw]'}>
            <span>{bio.content}</span>
        </div>
    );
}

export default AboutMeCard;