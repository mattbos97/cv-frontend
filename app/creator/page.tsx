'use client'
import React, {useState} from "react";
import {motion, MotionStyle} from 'motion/react'

const variants: {open: MotionStyle, close: MotionStyle} = {
    open: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f2937',
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        opacity: '50%'
    }
}

const Card = () => {

    const [style, setStyle] = useState<'open' | 'closed'>('closed');
    const handleOnClick = () => {
        setStyle((prev) => prev === 'open' ? 'closed' : 'open');
    }

    return(
        <motion.div
            className={'flex justify-center items-center bg-gray-500 rounded-lg p-8'}
            layout
            animate={style}
            initial={'closed'}
            variants={{
                open: {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    opacity: '80%',
                    backdropFilter: 'blur(10px)'
                }
            }}
        >
            <button
                className={'flex justify-center items-center w-full h-12 bg-blue-500 rounded-full p-8'}
                onClick={handleOnClick}
            >
                Toggle
            </button>
        </motion.div>
    );
}

export default function Creator() {
    return (
        <div className={'flex flex-1 justify-center items-center'}>
            <Card/>
        </div>
    );
}