import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CSESImg from "../../images/cses-logo.png";
import IEEEImg from "../../images/ieee-logo.png";
import "./Societies.css";

const Societies = () => {
    return (
        <Container className="societies">
            <Row>
                <Col>
                    <h2>CSES</h2>
                    <h4>Volunteer</h4>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <img src={CSESImg} alt="CSES" />
                </Col>
                <Col sm className="description">
                    Volunteer
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>IEEE</h2>
                    <h4>Volunteer</h4>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <img src={IEEEImg} alt="IEEE" />
                </Col>
                <Col sm className="description">
                    <p>
                        The Institute of Electrical and Electronic Engineers
                        (IEEE) provides many services to students in all
                        engineering disciplines including: workshops, technical
                        presentation and career networking events.
                        Responsibilities include: working at the club office;
                        recording sales; providing information about course
                        packs to fellow students; assisting with stocking; and
                        helping out at various events and activities.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Societies;
