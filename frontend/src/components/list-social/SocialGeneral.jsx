import React from "react";

const SocialGeneral = ({ social }) => {
    return (
        <a href={social.link}>
            <img src={social.icon} alt="" />
        </a>
    );
};

export default SocialGeneral;
