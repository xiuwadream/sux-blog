import React, { useState, useRef } from 'react';
import styles from './HoemIntroTag.module.css';
import clsx from 'clsx';

export default function(props){
    const containerRef = useRef(null);
    let [active,setActive] = useState(false)
    function handleClick(e){
        setActive(!active)
    }
    return (
        <div ref={containerRef} className={clsx(styles.container, active?styles.expand:'')} onClick={(e)=>handleClick(e)}>
            <div className={styles.title}>
                <img height="36" src={props.icon}/>
                <b>{props.title}</b><br/>
            </div>
            <p style={{textIndent:'2em'}}>
                {props.children}
            </p>
        </div>
    )
}