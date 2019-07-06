import React from "react";
import { Container } from "react-bootstrap";

import "./SectionHeader.css";

const SectionHeader = props => {
    return (
        <Container className="section-header">
            <h1>{props.children}</h1>
        </Container>
    );
};

export default SectionHeader;
