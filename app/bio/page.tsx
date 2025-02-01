'use client'
import bioJson from '@/app/bio/bio.json'
import {motion, Variants} from 'motion/react'

const Page = () => {
    return (
        <div
            className={
                'flex ' +
                'justify-center items-center ' +
                'pb-[25px] m-4 '
            }>
            <motion.div
                className={"flex flex-col justify-center m-8"}
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
                <h1>About me</h1>
                <span className={'whitespace-pre-wrap'}>
                {bioJson.content}
            </span>
            </motion.div>
        </div>
    );
}

export default Page;