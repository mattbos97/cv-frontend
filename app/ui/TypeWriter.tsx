'use client'
import {ReactNode, useEffect, useState} from "react";
import {animate, motion, useMotionValue, useTransform} from "motion/react";

interface WriterProps {
    text: string,
    className?: string,
    onComplete: () => void,
    children?: ReactNode
}

interface CursorProps {
    isTyping: boolean
}

interface TypeWriterProps {
    text: string,
    cursor: boolean
}

function Writer({text, className, onComplete}: WriterProps){
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
        <motion.pre className={`${className}`}>
            {textSlice}
        </motion.pre>
    );
}

function Cursor({isTyping}: CursorProps) {
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

export default function TypeWriter({text, cursor} : TypeWriterProps){

    const [isTyping, setIsTyping] = useState(true);
    const handleTypingComplete = () => setIsTyping(false);

    return(
        <div className={'flex gap-1'}>
            <Writer text={text} onComplete={handleTypingComplete}/>
            {cursor && <Cursor isTyping={isTyping}/>}
        </div>
    );
}