'use client';
import {motion, Variants} from 'motion/react';

const list = [
    'one',
    'two',
    'three',
    'four'
]

const containerVariants: Variants = {
    visible: {
        height: 'auto',
        width: 'auto',
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    },
    hidden: {
        height: 0,
        width: 0,
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    }
}

const variants: Variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

export default function Creator() {
    return (
        <div className={'flex w-full h-full justify-center items-center'}>
            <motion.div
                className={`bg-interactive-accent-2`}
                initial={'hidden'}
                animate={'visible'}
                variants={containerVariants}
            >
                {list.map((item, index) => (
                    <motion.div key={index} variants={variants}>{item}</motion.div>
                ))}
            </motion.div>
        </div>
    );
}