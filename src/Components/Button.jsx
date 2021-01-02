import React from "react";
import "./Button.css"

const STYLE = [
    "btn--blue",
    "btn--red"
]

export const Button = ({
    children,
    type,
    onClick,
    num
}) => {
    return(
        <>
        <button className={STYLE[0]} onClick={onClick} type={type}>{children}</button>
        </>
    );
};