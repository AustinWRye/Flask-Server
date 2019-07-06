import React from "react";
import { Container } from "react-bootstrap";

import "./MainHeader.css";

const MainHeader = props => {
    return (
        <Container className="main-header">
            <h1>{props.children}</h1>
        </Container>
    );
};

export default MainHeader;
