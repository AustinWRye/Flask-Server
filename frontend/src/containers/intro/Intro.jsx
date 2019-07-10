import React from "react";
import { Container } from "react-bootstrap";

import ListSocial from "../../components/list-social/ListSocial";
import "./Intro.css";

const Intro = () => {
    return (
        <section id="intro" className="section section-trans">
            <Container>
                <h2 className="subtitle">SOFTWARE/ELECTRICAL ENGINEERING</h2>
                <h1 className="title">AUSTIN RYE</h1>
                <hr className="seperator" />
                <Container className="d-flex justify-content-center list-social">
                    <ListSocial />
                </Container>
            </Container>
        </section>
    );
};

export default Intro;
