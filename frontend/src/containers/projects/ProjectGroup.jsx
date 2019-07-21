import React from "react";
import { Row, Col } from "react-bootstrap";

import "./ProjectGroup.css";

const ProjectGroup = props => {
    return (
        <Row className="project-group body">
            <Col className="column-1">
                <Row className="title">
                    <h3>{props.projectGroup.title}</h3>
                </Row>
                <Row className="image">
                    <img src={props.projectGroup.image} alt="" />
                </Row>
                <Row className="technologies">
                    <h5 className="subtitle">Technologies</h5>
                    <ul>
                        {props.projectGroup.technologies.map(
                            (technology, id) => {
                                return <li key={id}>{technology}</li>;
                            }
                        )}
                    </ul>
                </Row>
            </Col>
            <Col className="column-2">
                <Row className="description">
                    <p>{props.projectGroup.description}</p>
                </Row>
            </Col>
        </Row>
    );
};

export default ProjectGroup;
