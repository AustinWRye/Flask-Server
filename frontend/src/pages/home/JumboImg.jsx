import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./JumboImg.css";

const JumboImg = props => {
    return (
        <Jumbotron
            fluid
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(" +
                    props.img +
                    ")"
            }}
            className="img text-center vertical-center"
        >
            {props.children}
        </Jumbotron>
    );
};

export default JumboImg;
