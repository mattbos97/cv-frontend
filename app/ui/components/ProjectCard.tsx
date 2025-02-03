'use client'
import {motion, Variants} from 'motion/react';
import React, {useState} from "react";

const containerVariants: Variants = {
    open: {
        padding: '16px',
        height: 'auto',
        width: 'auto',
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    },
    closed: {
        padding: 0,
        height: 0,
        width: 0,
        transition: {
            when: 'afterChildren',
            staggerDirection: -1
        }
    }
}

const childVariants: Variants = {
    open: {
        height: 'auto',
        width: 'auto',
        opacity: 1
    },
    closed: {
        height: 0,
        width: 0,
        opacity: 0
    }
}

type VariantType = 'open' | 'closed';

const ProjectCard = (p: {projectTitle: string, projectFor: string, projectDescription: string}) => {

    const [variant, setVariant] = useState<VariantType>('closed');
    const toggleVariants = () => variant === 'open' ? setVariant('closed') : setVariant('open');

    return (
        <motion.div
            className={`
            cursor-pointer
            bg-background-accent-1 
            rounded-lg border-2 border-border-gray-3
            my-8 p-4
            w-[90vw]
            md:w-[60vw]`}
            onClick={toggleVariants}
        >
            <div>
                <h3>{p.projectTitle}</h3>
                <span>for: <span>{p.projectFor}</span></span>
            </div>
            <motion.div
                initial={'closed'}
                animate={variant}
                variants={containerVariants}
            >
                <motion.span
                    className={'whitespace-pre-wrap'}
                    variants={childVariants}
                >
                    {p.projectDescription}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;