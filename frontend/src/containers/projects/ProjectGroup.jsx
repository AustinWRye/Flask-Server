import React from "react";
import { Row, Col } from "react-bootstrap";

import MonitorIcon from "../../icons/monitor.svg";
import GitHubIcon from "../../icons/github-blue.svg";
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
                <Row className="links">
                    <a href="#personal-website-view-live">
                        <img src={MonitorIcon} alt="" />
                        <span>View Live</span>
                    </a>

                    <a href="#personal-website-view-source">
                        <img src={GitHubIcon} alt="" />
                        <span>View Source</span>
                    </a>
                </Row>
                <Row className="technologies">
                    <h5 className="subtitle">Technologies</h5>
                    <ul>
                        {props.projectGroup.technologies.map(
                            (technology, id) => {
                                return (
                                    <li key={id}>
                                        <span>{technology}</span>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </Row>
            </Col>
            <Col className="column-2">
                <Row>
                    <h5 className="subtitle">Overview</h5>
                </Row>
                <Row className="description">
                    <p>{props.projectGroup.description}</p>
                </Row>
                <Row className="more-details">
                    <a href="#personal-website">More Details</a>
                </Row>
            </Col>
        </Row>
    );
};

export default ProjectGroup;
