'use client'
import LinkButton from "@/app/ui/LinkButton";
import {usePathname} from "next/navigation";

const links = [
    {name: "Home", href: "/"},
    {name: "About me", href: "/about-me"},
    {name: "Experience", href: "/experience"},
    {name: "Skills", href: "/skills"},
    {name: "Styles", href: "/styles"}
];

export default function SideBar(){

    const path = usePathname();

    return(
        <nav className={"w-64 flex flex-col items-center space-y-4 p-8 bg-dark-primary"}>
            {links.map((link) => {
                return(
                    <LinkButton
                        key={link.name}
                        text={link.name}
                        href={link.href}
                        type={path === link.href ? 'secondary' : 'primary'}
                    />
                );
            })}
        </nav>
    );
}