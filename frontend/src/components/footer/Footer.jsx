import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialsList from "../socials-list/SocialsList";
import "./Footer.scss";

const Footer = () => {
    return (
        <section id="footer">
            <Container fluid>
                <Row className="socials-list d-flex justify-content-center">
                    <SocialsList />
                </Row>
                <Row className="name">
                    <h5>Austin Rye</h5>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
