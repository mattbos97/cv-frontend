import {LinkButton, LinkButtonParams} from "@/app/ui/LinkButton";

const links: LinkButtonParams[] = [
    {text: "Home", href: "/"},
    {text: "Personal info", href: "/about-me"},
    {text: "Experience", href: "/experience"},
    {text: "Skills", href: "/skills"},
    {text: "Styles", href: "/styles"}
]

export default function SideBar(){
    return(
        <nav className={"w-64 flex flex-col items-center space-y-4 p-8 bg-dark-primary"}>
            {links.map((link) => <LinkButton key={link.text} parameters={link}/>)}
        </nav>
    );
}