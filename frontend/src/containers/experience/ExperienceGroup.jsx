import React from "react";
import { Row, Col } from "react-bootstrap";

import "./ExperienceGroup.css";

const ExperienceGroup = props => {
    return (
        <div className="experience-group">
            <Row className="title">
                <h3>{props.experienceGroup.title}</h3>
            </Row>
            <Row className="organization">
                <h4>{props.experienceGroup.organization}</h4>
            </Row>
            <Row className="date">
                <h6>{props.experienceGroup.date}</h6>
            </Row>
            <Row className="body">
                <Col className="content">
                    <Row className="description">
                        <p>{props.experienceGroup.work.description}</p>
                    </Row>
                    <Row className="bullet-points">
                        <ul>
                            {props.experienceGroup.work.bulletPoints.map(
                                bullet => {
                                    return <li>{bullet}</li>;
                                }
                            )}
                        </ul>
                    </Row>
                </Col>
                <Col className="image">
                    <img src={props.experienceGroup.work.image} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default ExperienceGroup;
