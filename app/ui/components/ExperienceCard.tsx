'use client'
import Experience from '@/app/lib/experience/Experience'
import {motion} from 'motion/react';
import {useState} from "react";
import Button from "@/app/ui/components/Button";

function ExperienceInfo(props: { title: string, company: string, start: string, end: string }) {
    return <div className={"flex flex-row justify-between items-center space-x-8"}>
        <div className={"flex flex-col space-y-2"}>
            <span>{props.title}</span>
            <span>{props.company}</span>
            <span>{props.start} - {props.end}</span>
        </div>
    </div>;
}

export default function ExperienceCard(experience: Experience){

    const [variant, setVariant] = useState<'open' | 'closed'>('closed');
    const toggleVariant = () => variant === 'open' ? setVariant('closed') : setVariant('open');

    return(
        <motion.div
            className={`
            flex flex-col 
            rounded-lg border-[1px] border-border-gray-2
            bg-background-accent-1 
            p-4
            cursor-pointer`}
            onClick={toggleVariant}
        >
            <ExperienceInfo
                title={experience.title}
                company={experience.company}
                start={experience.start}
                end={experience.end}/>
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
                <div className={'w-full h-px bg-border-gray-3'}/>
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