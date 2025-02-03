import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    buttonType: 'primary' | 'secondary' | 'disabled'
}

const Button: React.FC<ButtonProps> = ({text, buttonType, ...rest}) => {

    return(
        <button
            {...rest}
            className={`
            text-white
            rounded-md 
            p-2
            ${buttonType === 'primary' && 'bg-solid-accent-1'}
            ${buttonType === 'secondary' && 'border-2 border-solid-accent-1 text-solid-accent-1'}
            ${buttonType === 'disabled' && 'bg-interactive-accent-2'}`}
        >
            {text}
        </button>
    );
}

export default Button;