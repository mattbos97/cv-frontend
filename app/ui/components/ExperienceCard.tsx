'use client'
import Experience from '@/app/lib/Experience'
import {motion} from 'motion/react';
import {useState} from "react";
import Button from "@/app/ui/components/Button";

export default function ExperienceCard(experience: Experience){

    const [variant, setVariant] = useState<'open' | 'closed'>('closed');
    const toggleVariant = () => variant === 'open' ? setVariant('closed') : setVariant('open');

    return(
        <motion.div
            className={
                "flex flex-col " +
                "rounded-lg border-[1px] border-border-gray-1" +
                " " +
                "p-4 m-4"
            }
        >
            <div className={'flex flex-row justify-between items-center'}>
                <div className={'flex flex-col space-y-2'}>
                    <span>{experience.title}</span>
                    <span>{experience.company}</span>
                    <span>{experience.start} - {experience.end}</span>
                </div>
                <Button text={'Read more'} buttonType={'primary'} onClick={toggleVariant} />
            </div>
            <motion.div
                initial={'closed'}
                animate={variant}
                variants={{
                    closed: {
                        height: 0,
                        width: 0,
                        opacity: 0,
                        padding: 0,
                        transition: {
                            width: {delay: 0.5, duration: 0.5},
                            height: {duration: 0.5},
                            when: 'afterChildren'
                        },
                        overflow: 'hidden'
                    },
                    open: {
                        height: 'auto',
                        width: 'auto',
                        opacity: 1,
                        padding: '8px',
                        transition: {
                            width: {duration: 0.5},
                            height: {delay: 0.5, duration: 0.5},
                            when: 'beforeChildren'
                        }
                    }
                }}
            >
                <motion.span
                    className={'whitespace-pre-wrap'}
                    variants={{
                        closed: {
                            opacity: 0
                        },
                        open: {
                            opacity: 1
                        }
                    }}
                >
                    {experience.description}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}