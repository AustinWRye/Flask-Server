import React from "react";
import { Container } from "react-bootstrap";

import ListSocial from "../list-social/ListSocial";
import "./Footer.css";

const Footer = () => {
    return (
        <section id="footer" className="section section-dark">
            <Container className="d-flex justify-content-center list-social">
                <ListSocial />
            </Container>
            <span>Austin Rye</span>
        </section>
    );
};

export default Footer;
