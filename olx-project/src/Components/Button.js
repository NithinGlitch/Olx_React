import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({
    children,type,done,buttonStyle,buttonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize:SIZES[0];
    return(
    <>
    <Link to='/sell' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={done}
            type={type}>
                {children}
            </button>
        </Link></>
    
        
        
    )
}