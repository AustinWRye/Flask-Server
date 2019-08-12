import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import "./SkillGroup.scss";

const SkillGroup = props => {
    return (
        <Col>
            <Row className="title">
                <h3>{props.skillGroup.title}</h3>
            </Row>
            <Row className="skills">
                {props.skillGroup.skills.map((skill, id) => {
                    return (
                        <Col key={id} className="skill">
                            <Row className="icon">
                                <img src={skill.icon} alt="" />
                            </Row>
                            <Row className="name">
                                <span>{skill.name}</span>
                            </Row>
                        </Col>
                    );
                })}
            </Row>
        </Col>
    );
};

export default SkillGroup;
