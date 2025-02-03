import React from "react";
import {TypeWriter} from "@/app/ui/animations/TypeWriter";

interface PageContainerProps {
    pageTitle: string,
    children?: React.ReactNode
}


const PageContainer: React.FC<PageContainerProps> = ({pageTitle, children}) => {
    return(
        <div className={`w-full`}>
            <div className={`
            flex justify-center items-center 
            p-4 w-full h-[20vh]
            bg-background-accent-1`}>
                <TypeWriter text={pageTitle} fontSize={"text-6xl"}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default PageContainer;