'use client'

import clsx from "clsx"
import React from "react";


interface ButtonProps {
    type? : 'button'| 'submit'| 'rest' | undefined
    fullWidth? : boolean;
    children? : React.ReactNode;
    onClick?: () => void;
    secondary? : boolean;
    danger?: boolean;
    disabled? : boolean;

}


const Button: React.FC<ButtonProps> = ({
    children,
    danger,
    disabled,
    fullWidth,
    onClick,
    secondary,
    type,
    
}) => {

return (
    <div>
         <button onClick={onClick} disabled={disabled} type={type}  className={clsx(`
         flex 
         justify-center 
         px-3
         py-2
         text-sm
         font-semibold 
            focus
         `)}></button>

    </div>
)

}

export default Button