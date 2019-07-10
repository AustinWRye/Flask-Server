import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import RyeLogo from "../../icons/rye-logo.png";
import "./Navbar.css";

class Navbar extends Component {
    state = {
        sticky: null
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.setState({ sticky: this.refs.navbar.offsetTop });
    }

    handleScroll = () => {
        if (window.pageYOffset >= this.state.sticky) {
            this.refs.navbar.classList.add("sticky");
            this.refs.navbarFill.classList.add("fill");
        } else {
            this.refs.navbar.classList.remove("sticky");
            this.refs.navbarFill.classList.remove("fill");
        }
    };

    render() {
        return (
            <Fragment>
                <div id="navbar" ref="navbar">
                    <Container className="d-flex justify-content-center">
                        <Row>
                            <Col>
                                <Link to="/" className="link">
                                    ABOUT
                                    <div className="link-select" />
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/" className="link">
                                    PROJECTS
                                    <div className="link-select" />
                                </Link>
                            </Col>
                            <Col className="logo">
                                <Link to="/" className="link">
                                    <img src={RyeLogo} alt="" />
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/" className="link">
                                    SKILLS
                                    <div className="link-select" />
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/" className="link">
                                    WORK
                                    <div className="link-select" />
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="navbar-fill" ref="navbarFill" />
            </Fragment>
        );
    }
}

export default Navbar;
