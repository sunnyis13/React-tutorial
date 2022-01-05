import React from "react";
import './Button.css'
import { Link } from "react-router-dom";
import { Children } from "react/cjs/react.production.min";

const STYLES = ['btn-primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    ButtonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

    const checkButtonSize = SIZES.includes(ButtonSize)
    ? ButtonSize
    : SIZES[0]

    return (
        <Link to='sign-in' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}