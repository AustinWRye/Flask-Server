import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CPRTImg from "../../images/cprt-waldo.jpg";
import CUinSpaceImg from "../../images/cuinspace-rocket.png";
import "./Clubs.css";

const Clubs = () => {
    return (
        <Container className="clubs">
            <Row>
                <Col>
                    <h2>Carleton Planetary Robotics Team</h2>
                    <h4>Electrical Design Lead</h4>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <img src={CPRTImg} alt="CPRT" />
                </Col>
                <Col sm className="description">
                    <p>
                        Design, build, and program a Mars Rover to compete in
                        International Rover Competitions.
                    </p>
                    <ul>
                        <li>
                            Designed the power system: battery, emergency stop
                            relay, regulators, protection circuits,
                            microcontroller breakout, power distribution, etc.
                        </li>
                        <li>
                            Designed and integrated custom PCBs using Altium
                            Designer
                        </li>
                        <li>
                            Soldered, assembled and wired PCBs and electrical
                            components
                        </li>
                        <li>
                            Tested and troubleshooted PCBs using scilloscopes,
                            multimeters, signal generators, etc.
                        </li>
                        <li>Managed power consumption and financial budget</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>CUinSpace</h2>
                    <h4>Computer Systems Engineering Member</h4>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <img src={CUinSpaceImg} alt="CPRT" />
                </Col>
                <Col sm className="description">
                    <p>
                        Designed, built, and programmed a Rocket to compete in
                        International Rocket Competitions.
                    </p>
                    <ul>
                        <li>
                            Designed sensor/control systems for the rocket: RF
                            system, GPS tracking, temperature sensors, drone
                            deployment, engine ignition, etc.
                        </li>
                        <li>Programed ARM microcontrollers in embedded C</li>
                        <li>Designed and integrated custom PCBs using Eagle</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Clubs;
