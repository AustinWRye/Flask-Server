import React from "react";
import { Container } from "react-bootstrap";

import "./ContentSection.css";

const ContentSection = props => {
    return <Container className="content-section">{props.children}</Container>;
};

export default ContentSection;
