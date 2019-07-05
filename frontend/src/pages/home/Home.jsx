import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import NavigationBar from "../../components/NavigationBar";
import JumboImg from "./JumboImg";
import BlueLagoon from "./blue-lagoon-moonlight-iceland.jpg";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <JumboImg img={BlueLagoon}>
                    <Container className="intro">
                        <h1 name="name">AUSTIN RYE</h1>
                        <h3 name="description">
                            Studying Electrical Engineering at Carleton
                            University
                        </h3>
                    </Container>
                </JumboImg>
                <JumboImg img={BlueLagoon} />
            </React.Fragment>
        );
    }
}

export default Home;
