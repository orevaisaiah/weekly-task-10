import React from 'react'
import { AiOutlineCaretRight } from "react-icons/ai";

const Button = ({name}) => {
    return (
        <div>
        <button>{name} {AiOutlineCaretRight}</button>
            
        </div>
    )
}

export default Button
