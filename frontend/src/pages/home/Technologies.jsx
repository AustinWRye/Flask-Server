import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ReactIcon from "../../components/icons/react-icon.png";
import JavaScriptIcon from "../../components/icons/javascript-icon.png";
import HTML5Icon from "../../components/icons/html5-icon.png";
import CSS3Icon from "../../components/icons/css3-icon.png";
import PythonIcon from "../../components/icons/python-icon.png";
import JavaIcon from "../../components/icons/java-icon.png";
import CppIcon from "../../components/icons/cpp-icon.png";
import CIcon from "../../components/icons/c-icon.png";
import NodeJSIcon from "../../components/icons/nodejs-icon.png";
import CSharpIcon from "../../components/icons/csharp-icon.png";
import GitIcon from "../../components/icons/git-icon.png";
import SQLIcon from "../../components/icons/sql-icon.png";
import AltiumDesignerIcon from "../../components/icons/altiumdesigner-icon.png";
import EagleIcon from "../../components/icons/eagle-icon.png";
import ArduinoIcon from "../../components/icons/arduino-icon.png";
import RaspberryPiIcon from "../../components/icons/raspberrypi-icon.png";
import LinuxIcon from "../../components/icons/linux-icon.png";
import "./Technologies.css";

const Technologies = () => {
    return (
        <Container className="technologies">
            <Row>
                <Col>
                    <h3>Software Development</h3>
                    <Row>
                        <img src={HTML5Icon} alt="HTML5" />
                        <span>HTML5</span>
                    </Row>
                    <Row>
                        <img src={CSS3Icon} alt="CSS3" />
                        <span>CSS3</span>
                    </Row>
                    <Row>
                        <img src={JavaScriptIcon} alt="JavaScript" />
                        <span>JavaScript</span>
                    </Row>
                    <Row>
                        <img src={ReactIcon} alt="React" />
                        <span>React</span>
                    </Row>
                    <Row>
                        <img src={PythonIcon} alt="Python" />
                        <span>Python</span>
                    </Row>
                    <Row>
                        <img src={JavaIcon} alt="Java" />
                        <span>Java</span>
                    </Row>
                    <Row>
                        <img src={CppIcon} alt="C++" />
                        <span>C++</span>
                    </Row>
                    <Row>
                        <img src={CIcon} alt="C" />
                        <span>C</span>
                    </Row>
                    <Row>
                        <img src={NodeJSIcon} alt="Node.js" />
                        <span>Node.js</span>
                    </Row>
                    <Row>
                        <img src={CSharpIcon} alt="C#" />
                        <span>C#</span>
                    </Row>
                    <Row>
                        <img src={GitIcon} alt="git" />
                        <span>git</span>
                    </Row>
                    <Row>
                        <img src={SQLIcon} alt="SQL" />
                        <span>SQL</span>
                    </Row>
                </Col>
                <Col>
                    <h3>Hardware</h3>
                    <Row>
                        <img src={AltiumDesignerIcon} alt="Altium Designer" />
                        <span>Altium Designer</span>
                    </Row>
                    <Row>
                        <img src={EagleIcon} alt="Eagle" />
                        <span>Eagle PCB</span>
                    </Row>
                    <Row>
                        <img src={ArduinoIcon} alt="Arduino" />
                        <span>Arduino</span>
                    </Row>
                    <Row>
                        <img src={RaspberryPiIcon} alt="RaspebrryPi" />
                        <span>Raspberry Pi</span>
                    </Row>
                    <Row>
                        <img src={LinuxIcon} alt="Linux" />
                        <span>Linux</span>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Technologies;
