import React from "react";
import { Container } from "react-bootstrap";
import IconLinks from "../../components/IconLinks";
import "./Intro.css";

const Intro = () => {
    return (
        <Container className="intro">
            <h1 name="name">AUSTIN RYE</h1>
            <h4 name="description">
                Studying Electrical Engineering at Carleton University
            </h4>
            <Container className="icon-items-position">
                <IconLinks />
            </Container>
        </Container>
    );
};

export default Intro;
