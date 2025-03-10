'use client'
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import * as motion from "motion/react-client"

interface NavLinkProps {
    text: string,
    href: string,
}

interface WrapperProps {
    text: string,
    indent: number,
    children: React.ReactNode
}

const navLinks: NavLinkProps[] = [
    { text: "Home", href: "/" },
    { text: "Biography", href: "/bio" },
    { text: "Experience", href: "/experience" },
    { text: "Skills", href: "/skills" }
]

const getGrayColor = (indent: number): string => {
    const shades = ['text-gray-900', 'text-gray-700', 'text-gray-500']
    return shades[indent] || 'text-gray-500';
}

const NavLink = ({text, href}: NavLinkProps) => {

    const path = usePathname();
    const isActive = href === path;

    return (
        <motion.button
            className={'pl-4 ' + (isActive ? 'text-yellow-400' : 'text-yellow-600')}
            initial={{paddingLeft: '0px', paddingRight: '24px'}}
            whileHover={{paddingLeft: '24px', paddingRight: '0px'}}
            animate={isActive ? {paddingLeft: '24px', paddingRight: '0px'} : {paddingLeft: '0px', paddingRight: '24px'}}
        >
            <Link href={href}>&lt;{text}/&gt;</Link>
        </motion.button>
    );
};

const Wrapper = ({text, indent, children}: WrapperProps) => {
    return (
        <div className={'pl-4 flex flex-col items-start'}>
            <span className={`${getGrayColor(indent)}`}>
                &lt;{text}&gt;
            </span>
            {children}
            <span className={`${getGrayColor(indent)}`}>
                &lt;/{text}&gt;
            </span>
        </div>
    );
};

export default function SideBar() {
    return (
        <div className={'flex flex-col items-start'}>
            <Wrapper text={'body'} indent={0}>
                <Wrapper text={'list'} indent={1}>
                    {navLinks.map((nl, key) => {
                        return(
                            <Wrapper key={key} text={'item'} indent={2}>
                                <NavLink text={nl.text} href={nl.href}/>
                            </Wrapper>
                        );
                    })}
                </Wrapper>
            </Wrapper>
        </div>
    );
}