'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export interface LinkButtonParams {
    text: string,
    href: string
}

export function LinkButton({ parameters } : { parameters: LinkButtonParams}){

    const path = usePathname();

    return(
        <Link href={parameters.href}>
            <button className={"w-40 max-w-40 min-h-12 border-4 rounded-md border-accent-yellow " +
                (parameters.href === path
                    ? "text-black bg-accent-yellow "
                    : "text-accent-yellow bg-none hover:ease-in duration-200 " +
                    "hover:text-accent-blue hover:border-accent-blue")}>{parameters.text}</button>
        </Link>
    );
}