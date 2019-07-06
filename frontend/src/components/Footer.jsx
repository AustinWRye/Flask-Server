import React from "react";
import { Container } from "react-bootstrap";

import IconLinks from "./IconLinks";
import "./Footer.css";

const Footer = () => {
    return (
        <Container className="footer">
            <Container className="icon-items-position">
                <IconLinks />
            </Container>
        </Container>
    );
};

export default Footer;
