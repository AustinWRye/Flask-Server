import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";

import MonitorIcon from "../../icons/monitor.svg";
import GitHubIcon from "../../icons/github-blue.svg";
import "./ProjectGroup.scss";

const ProjectGroup = props => {
    return (
        <Fragment>
            <Row className="title">
                <h3>{props.projectGroup.title}</h3>
            </Row>
            <Row>
                <Col md="5" className="column1">
                    <Row className="image">
                        <Image src={props.projectGroup.image} alt="" fluid />
                    </Row>
                    <Row className="links d-flex justify-content-left">
                        <a href="#personal-website-view-live" className="link">
                            <img src={MonitorIcon} alt="" />
                            <span>View Live</span>
                        </a>
                        <a href="#personal-website-view-source" className="link">
                            <img src={GitHubIcon} alt="" />
                            <span>View Source</span>
                        </a>
                    </Row>
                    <Row className="technologies">
                        <h5 className="subtitle">Technologies</h5>
                    </Row>
                    <Row className="technologies">
                        <ul className="d-flex justify-content-left">
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
                <Col className="column2">
                    <Row>
                        <h5 className="subtitle">Overview</h5>
                    </Row>
                    <Row className="description">
                        <p>{props.projectGroup.description}</p>
                    </Row>
                    <Row className="more-details">
                        <Link to="/projects/">More Details</Link>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectGroup;
