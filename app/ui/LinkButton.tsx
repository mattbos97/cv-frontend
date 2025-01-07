import Link from "next/link";

const base = "w-40 h-12 border-4 rounded-md hover:text-black hover:ease-in duration-200"
const primary = base + " border-yellow-400 text-yellow-400 hover:bg-yellow-400";
const secondary = base + " border-blue-500 text-blue-500 hover:bg-blue-500";

export default function LinkButton({ href, text, type } : { text: string, href: string, type: 'primary' | 'secondary' }){
    switch (type) {
        case "primary":
            return(
                <Link href={href}>
                    <button className={primary}>{text}</button>
                </Link>
            );
        case "secondary":
            return(
                <Link href={href}>
                    <button className={secondary}>{text}</button>
                </Link>
            );
    }
}