import React from "react";
import { Link } from "react-router-dom";

const SocialResume = ({ social }) => {
    return (
        <Link to={social.link} aria-label="Download Resume" target="_blank" download>
            <img src={social.icon} alt="" />
        </Link>
    );
};

export default SocialResume;
