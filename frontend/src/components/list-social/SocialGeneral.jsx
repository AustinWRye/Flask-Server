import React from "react";

const SocialGeneral = ({ social }) => {
    return (
        <a href={social.link} aria-label="Open Link Social">
            <img src={social.icon} alt="" />
        </a>
    );
};

export default SocialGeneral;
