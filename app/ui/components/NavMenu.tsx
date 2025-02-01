'use client'
import React, {ReactNode, useState} from "react";
import {motion} from 'motion/react'
import {BackpackIcon, Cross1Icon, HamburgerMenuIcon, HomeIcon, PersonIcon} from "@radix-ui/react-icons";
import {AiOutlineExperiment} from "react-icons/ai";
import Link from "next/link";

interface NavMenuItem {
    icon: ReactNode,
    text: string,
    href: string
}

const navItems: NavMenuItem[] = [
    { icon: <HomeIcon/>, text: 'Home', href: '/'},
    { icon: <PersonIcon/>, text: 'About me', href: '/bio'},
    { icon: <BackpackIcon/>, text: 'Work experience', href: '/experience'},
    { icon: <AiOutlineExperiment/>, text: 'skills', href: '/skills'}
]

const NavMenu: React.FC = () => {

    const [variant, setVariant] = useState<'closed' | 'open'>('closed');
    const toggle = () => variant === 'closed' ? setVariant('open') : setVariant('closed');

    return(
        <motion.div
            className={`flex flex-col rounded-lg border-[1px] border-border-gray-2`}
        >
            <button
                className={`p-4`}
                onClick={toggle}
            >
                {variant === 'closed' ? <HamburgerMenuIcon/> : <Cross1Icon/>}
            </button>
            <motion.div
                initial={'closed'}
                animate={variant}
                variants={{
                    closed: {
                        width: 0,
                        height: 0,
                        transition: {
                            height: { duration: 0.5},
                            width: { delay: 0.5, duration: 0.5},
                            when: 'afterChildren',
                            staggerChildren: 0.2,
                            staggerDirection: -1
                        }
                    },
                    open: {
                        width: 'auto',
                        height: 'auto',
                        transition: {
                            width: { duration: 0.5},
                            height: { delay: 0.5, duration: 0.5},
                            when: 'beforeChildren',
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {navItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <motion.button
                            className={`flex flex-row justify-start items-center w-full p-2 gap-2`}
                            whileHover={{
                                background: '#D9E9FD'
                            }}
                            variants={{
                                closed: {
                                    opacity: 0,
                                },
                                open: {
                                    opacity: 1,
                                }
                            }}
                        >
                            {item.icon}
                            {item.text}
                        </motion.button>
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default NavMenu;