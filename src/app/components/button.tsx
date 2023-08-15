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
         <button onClick={onClick} disabled={disabled} className={clsx(`
         flex 
         justify-center 
         px-3
         py-2
         text-sm
         font-semibold 
        focus-visiable:outline
        focus-visiable:outline-2
        focus-visiable:outline-offset-2
         `, disabled && "opacity-50 cursor-default",
         fullWidth &&  "w-full",
         secondary ? 'text-gray-900' : 'text-white',
         danger && "bg-rose-500 hover:bg-rose-600 focus-visiable:outline-rose-600",
         !secondary && !danger && "bg-sky-500 hover: bg-sky-600 focus-visiable:outline-sky-600"
         
         )}>{children}</button>

    </div>
)

}

export default Button