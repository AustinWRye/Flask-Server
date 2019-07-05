import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../../components/NavigationBar";
import JumboImg from "./JumboImg";
import IconLinks from "../../components/IconLinks";
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
                        <h4 name="description">
                            Studying Electrical Engineering at Carleton
                            University
                        </h4>
                        <Container className="icon-items-position">
                            <IconLinks />
                        </Container>
                    </Container>
                </JumboImg>
            </React.Fragment>
        );
    }
}

export default Home;
