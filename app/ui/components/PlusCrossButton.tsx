import {HTMLMotionProps, motion, Variants} from "motion/react";
import {useState} from "react";
import {Cross1Icon} from "@radix-ui/react-icons";

const plusCrossVariants: Variants = {
    plus: {
        rotate: 45,
        background: '#0D74CE'
    },
    cross: {
        rotate: 0,
        background: '#DC3E42'
    }
}

interface PlusCrossProps extends HTMLMotionProps<'button'> {
    handleOnClick: () => void
}

const PlusCrossButton = ({handleOnClick, ...props}: PlusCrossProps) => {
    const [variant, setVariant] = useState<'plus' | 'cross'>('plus');
    const toggleVariant = () => variant === 'plus' ? setVariant('cross') : setVariant('plus');

    return(
        <motion.button
            className={'rounded-full p-2'}
            {...props}
            onClick={() => {
                handleOnClick();
                toggleVariant();
            }}
            initial={'plus'}
            animate={variant}
            variants={plusCrossVariants}
        >
            <Cross1Icon color={'white'}/>
        </motion.button>
    );
}

export default PlusCrossButton;