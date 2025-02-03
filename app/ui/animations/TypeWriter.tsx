'use client'
import {useEffect, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "motion/react";

const Writer = ({text, onComplete, className}: {
    text: string,
    onComplete: () => void,
    className: string
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
        <motion.div className={`${className}`}>
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

export interface TypeWriterProps {
    text: string,
    textColor?: 'text-text-primary' | 'text-text-secondary',
    fontSize?: 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl',
    isTyping?: boolean,
    onComplete?: () => void;
}

export const TypeWriter = ({text, textColor, fontSize}: TypeWriterProps) => {
    const [isTyping, setIsTyping] = useState(true);
    const handleTypingComplete = () => setIsTyping(false);

    const style = [textColor, fontSize].join(' ');

    return (
        <div>
            <Writer text={text} onComplete={handleTypingComplete} className={style}/>
            <Cursor isTyping={isTyping}/>
        </div>
    );
}