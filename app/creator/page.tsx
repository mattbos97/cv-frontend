'use client';
import {motion, Variant, Variants} from 'motion/react';
import React, {useState} from "react";

const CardRoot: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggle = () => setIsExpanded(!isExpanded);

    return(
        <motion.div>

        </motion.div>
    );
}

const CardInfo: React.FC = () => {
    return(
        <motion.div>

        </motion.div>
    );
}

const CardExpand: React.FC = () => {
    return(
        <motion.div>

        </motion.div>
    );
}

const Card = {
    Root: CardRoot,
    Info: CardInfo,
    Expand: CardExpand
}

export default function Creator() {
    return (
        <div className={'flex w-full h-full justify-center items-center'}>
            <Card.Root>
                <Card.Info>

                </Card.Info>
                <Card.Expand>

                </Card.Expand>
            </Card.Root>
        </div>
    );
}