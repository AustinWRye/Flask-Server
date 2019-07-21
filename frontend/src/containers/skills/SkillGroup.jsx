import React from "react";
import { Row, Col } from "react-bootstrap";

import "./SkillGroup.css";

const SkillGroup = props => {
    return (
        <div className="skills-group">
            <h3>{props.skillGroup.title}</h3>
            <Row>
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
        </div>
    );
};

export default SkillGroup;
