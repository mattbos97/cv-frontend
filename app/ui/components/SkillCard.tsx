'use client'
import {motion, animate, useMotionValue, useTransform} from 'motion/react'
import React, {useEffect} from 'react'

const skillLevelToPercentage: Record<string, number> = {
    beginner: 25,
    intermediate: 50,
    expert: 75,
    pro: 100
}

export interface SkillCardProps{
    name: string,
    level: string
}

function ProgressBar({skillLevel}: {skillLevel: string}) {
    return (
        <div className={"w-full h-2 bg-interactive-accent-3 rounded-full"}>
            <motion.div
                className={"h-full rounded-full bg-solid-accent-1"}
                initial={{width: '0%'}}
                animate={{width: `${skillLevelToPercentage[skillLevel]}%`}}
                transition={{delay: 0.5, duration: 1, ease: 'easeOut'}}
            />
        </div>
    );
}

function SkillLevelDescription({skillLevel}: {skillLevel: string}) {
    return (
        <div className={"w-full flex justify-between"}>
            <span className={"text-gray-400 text-xs"}>Skill level:
                <span className={"text-accent-yellow"}>{skillLevel}</span>
            </span>
            <div className={'flex flex-row'}>
                <Percentage skillLevel={skillLevel}/>
                <span className={'text-xs text-gray-400'}>%</span>
            </div>
        </div>
    );
}

function Percentage({skillLevel}: {skillLevel: string}){
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, skillLevelToPercentage[skillLevel], {duration: 1, delay: 0.5, ease: 'easeOut'})
        return () => controls.stop()
    })

    return(
        <motion.pre className={'text-xs text-gray-400'}>{rounded}</motion.pre>
    );
}

export default function SkillCard({name, level}: SkillCardProps) {

    return (
        <motion.div
            className={`
            rounded-lg border-[1px] border-border-gray-2
            w-[350px] p-4 flex flex-col justify-around
            bg-background-accent-1
            m-4
            `}
            whileHover={{
                scale: 1.05,
            }}
        >
            <span className={'text-xl pb-4'}>{name}</span>
            <ProgressBar skillLevel={level}/>
            <SkillLevelDescription skillLevel={level}/>
        </motion.div>
    );
}