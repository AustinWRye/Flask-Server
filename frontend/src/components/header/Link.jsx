import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = props => {
    if (window.location.pathname === "/") {
        return (
            <a href={props.hash} aria-label="Open Link" className={props.className}>
                {props.children}
            </a>
        );
    } else {
        return (
            <ReactLink to={props.link} className={props.className}>
                {props.children}
            </ReactLink>
        );
    }
};

export default Link;
