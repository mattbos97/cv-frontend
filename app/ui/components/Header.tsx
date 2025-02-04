'use client'
import React, {ReactNode, useState} from "react";
import {BackpackIcon, ChatBubbleIcon, HamburgerMenuIcon, HomeIcon, RocketIcon} from "@radix-ui/react-icons";
import {AiOutlineExperiment} from "react-icons/ai";
import {motion, Variants} from "motion/react";
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

const navItemVariants: Variants = {
    visible: {
        height: '3rem',
        opacity: 1
    },
    hidden: {
        height: 0,
        opacity: 0,
        overflow: 'hidden'
    }
}

const Header = () => {

    type variants = 'visible' | 'hidden';
    const [variant, setVariant] = useState<variants>('hidden');
    const toggleVariants = () => variant === 'visible' ? setVariant('hidden') : setVariant('visible');

    return(
        <div className={'flex flex-col items-center w-full bg-background-accent-1'}>
            {/* Top bar with website title */}
            <div className={`
            flex justify-start items-center 
            w-full 
            border-b-2 border-border-gray-3 h-12`}>
                <button
                    className={'flex justify-center items-center h-full aspect-square'}
                    onClick={toggleVariants}
                >
                    <HamburgerMenuIcon/>
                </button>
                Matt Bos - CV
            </div>

            {/* Navigation bar */}
            <motion.div
                className={`
                flex flex-col sm:flex-row justify-center items-center
                w-full sm:w-auto`}
            >
                {navItems.map((item, index) => {
                    return(
                        <motion.button
                            className={'flex w-full sm:w-auto justify-start sm:justify-center items-center px-4'}
                            key={index}
                            whileHover={{background: '#C8DFFB', color: '#0D74CE'}}
                            variants={navItemVariants}
                            initial={'hidden'}
                            animate={variant}
                        >
                            <Link className={'flex justify-start items-center w-full h-full'} href={item.href}>
                                {item.icon}
                                {item.text}
                            </Link>
                        </motion.button>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default Header;