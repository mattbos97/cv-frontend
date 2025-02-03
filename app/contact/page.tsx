import Link from "next/link";
import InfoMessage from "@/app/ui/components/InfoMessage";

const Contact = () => {
    return(
        <div className={`
        flex flex-1
        justify-center items-start`}>
            <div className={`
            bg-background-accent-1 rounded-lg p-4 space-y-4`}>
                <div>
                    <span className={'font-bold'}>Mobile: </span>
                    <Link className={'underline text-blue-500'} href={'tel:+61497506959'}>+61 497 506 959</Link>
                </div>
                <div>
                    <span className={'font-bold'}>E-mail: </span>
                    <Link className={'underline text-blue-500'} href={'mailto:matt.bos1997@gmail.com'}>matt.bos1997@gmail.com</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;