import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import "./ExperienceGroup.scss";

const ExperienceGroup = props => {
    return (
        <Fragment>
            <Row className="title">
                <h3>{props.experienceGroup.title}</h3>
            </Row>
            <Row className="organization">
                <h4>{props.experienceGroup.organization}</h4>
            </Row>
            <Row className="date">
                <h6>{props.experienceGroup.date}</h6>
            </Row>
            <Row>
                <Col className="column1">
                    <Row className="description">
                        <p>{props.experienceGroup.work.description}</p>
                    </Row>
                    <Row className="bullet-points">
                        <ul>
                            {props.experienceGroup.work.bulletPoints.map(
                                (bullet, id) => {
                                    return <li key={id}>{bullet}</li>;
                                }
                            )}
                        </ul>
                    </Row>
                </Col>
                <Col md="4" className="column2">
                    <div className="image">
                        <img src={props.experienceGroup.work.image} alt="" />
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ExperienceGroup;
