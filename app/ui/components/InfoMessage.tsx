import React from "react";
import {InfoCircledIcon} from "@radix-ui/react-icons";


interface InfoMessageProps {
    message: string
}

const InfoMessage: React.FC<InfoMessageProps> = ({message}) => {
    return(
        <div className={'flex flex-row items-center justify-center space-x-2 bg-interactive-accent-3 p-4 m-4 rounded-lg'}>
            <InfoCircledIcon color={'#0D74CE'}/>
            <span className={'text-solid-accent-1'}>{message}</span>
        </div>
    );
}

export default InfoMessage;