'use client'
import React, {ReactNode, useState} from "react";
import {motion} from 'motion/react'
import {
    BackpackIcon,
    ChatBubbleIcon,
    Cross1Icon,
    HamburgerMenuIcon,
    HomeIcon,
    RocketIcon
} from "@radix-ui/react-icons";
import {AiOutlineExperiment} from "react-icons/ai";
import Link from "next/link";

interface NavMenuItem {
    icon: ReactNode,
    text: string,
    href: string
}

const navItems: NavMenuItem[] = [
    { icon: <HomeIcon/>, text: 'Home', href: '/'},
    { icon: <BackpackIcon/>, text: 'Work experience', href: '/experience'},
    { icon: <RocketIcon/>, text: 'Projects', href: '/projects'},
    { icon: <AiOutlineExperiment/>, text: 'skills', href: '/skills'},
    { icon: <ChatBubbleIcon/>, text: 'Contact', href: '/contact'},
]

const NavMenu: React.FC = () => {

    const [variant, setVariant] = useState<'closed' | 'open'>('closed');
    const toggle = () => variant === 'closed' ? setVariant('open') : setVariant('closed');
    const closeWhenSmallScreen = () => {
        if (window.innerWidth < 768){
            setVariant('closed');
        }
    }

    return(
        <>
            {variant === 'open' && (
                <div onClick={toggle} className={'absolute left-0 top-0 bg-solid-gray-2/50 w-full h-full'}/>
            )}
            <motion.div
                layout
                className={`
            flex flex-col 
            rounded-lg border-2 border-border-gray-1 
            bg-background-accent-1
            absolute left-2 top-2 z-50`}
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
                                height: {duration: 0.3},
                                width: {delay: 0.3, duration: 0.3},
                                when: 'afterChildren',
                                staggerChildren: 0.1,
                                staggerDirection: -1
                            }
                        },
                        open: {
                            width: 'auto',
                            height: 'auto',
                            transition: {
                                width: {duration: 0.3},
                                height: {delay: 0.3, duration: 0.3},
                                when: 'beforeChildren',
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {navItems.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <motion.button
                                onClick={toggle}
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
        </>
    );
}

export default NavMenu;