import Link from "next/link";

export default function SideBar(){

    const links = [
        {name: "Home", href: "/"},
        {name: "About me", href: "/about-me"},
        {name: "Experience", href: "/experience"},
        {name: "Skills", href: "/skills"}
    ];

    return(
        <nav className={"border-dotted border-black border-2 w-64 flex items-center flex-col"}>
            {links.map((link) => {
                return(
                    <Link
                        className={"border-dotted border-black border-2 rounded-full w-48 flex justify-center"}
                        key={link.name}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}