'use client'
import {HTMLAttributes, useEffect, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "motion/react";

const Writer = ({text, onComplete}: {
    text: string,
    onComplete: () => void
}) => {
    const textIndex = useMotionValue(0)
    const textIndexRounded = useTransform(() => Math.round(textIndex.get()));
    const textSlice = useTransform(() => text.slice(0, textIndexRounded.get()));

    useEffect(() => {
        const controls = animate(textIndex, text.length,
            {
                duration: 1,
                ease: 'linear',
                onComplete: onComplete
            });
        return () => controls.stop();
    }, [textIndex, text, onComplete]);

    return (
        <motion.div>
            {textSlice}
        </motion.div>
    );
}

const Cursor = ({isTyping}: {
    isTyping: boolean
}) => {
    const opacity = useMotionValue(1);
    const blink = useTransform(() => Math.round(opacity.get()));

    useEffect(() => {
        const controls = animate(opacity, [1, 0, 1], {
            duration: 1,
            repeat: Infinity,
        })

        return () => controls.stop();
    }, [opacity]);

    return(
        <motion.div
            className={'flex-1 w-px bg-white'}
            style={
                {
                    opacity: isTyping ? 1 : blink
                }}
        >
        </motion.div>
    );
}

interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string
}

export const TypeWriter = ({text, ...props}: Props) => {
    const [isTyping, setIsTyping] = useState(true);
    const handleTypingComplete = () => setIsTyping(false);


    return (
        <div {...props}>
            <Writer text={text} onComplete={handleTypingComplete}/>
            <Cursor isTyping={isTyping}/>
        </div>
    );
}