import React from "react";
import { Container, Row } from "react-bootstrap";

import "./About.scss";

const About = () => {
    return (
        <section id="about">
            <Container fluid>
                <Row className="quote">
                    <p>
                        “Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of what
                        you are doing.”
                    </p>
                </Row>
                <Row>
                    <p>
                        My name is Austin Rye. I'm an electrical engineering student
                        with over 4 years of experience in circuit design, embedded
                        systems and software development. I've been a part of many
                        successful team projects and continue to seek out
                        opportunities to better myself.
                    </p>
                </Row>
            </Container>
        </section>
    );
};

export default About;
