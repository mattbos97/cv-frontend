'use client'
import bioJson from '@/app/bio/bio.json'
import {motion} from 'motion/react'

const Page = () => {
    return (
        <motion.div
            className={"m-8 p-4 rounded-lg bg-background-accent-1 self-start"}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.3}
                },
                hidden: {
                    opacity: 0,
                    y: 50
                }
            }}
            initial={'hidden'}
            animate={'visible'}
        >
                <span className={'whitespace-pre-wrap'}>
                    {bioJson.content}
                </span>
        </motion.div>
    );
}

export default Page;