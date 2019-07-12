import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col } from "react-bootstrap";

import RyeLogo from "../../icons/rye-logo.png";
import "./Header.css";

class Header extends Component {
    state = {
        sticky: null
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
        this.setState({ sticky: this.refs.header.offsetTop });
    }

    handleResize = () => {
        if (this.refs.header.classList.contains("sticky")) {
            this.setState({ sticky: this.refs.headerFill.offsetTop });
        } else {
            this.setState({ sticky: this.refs.header.offsetTop });
        }
    };

    handleScroll = () => {
        // Sticky Navbar
        if (window.pageYOffset >= this.state.sticky) {
            this.refs.header.classList.add("sticky");
            this.refs.headerFill.classList.add("fill");
        } else {
            this.refs.header.classList.remove("sticky");
            this.refs.headerFill.classList.remove("fill");
        }
    };

    render() {
        return (
            <Fragment>
                <div id="header" ref="header">
                    <Navbar expand="sm">
                        <Container>
                            <Row>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Col className="logo-collapse">
                                    <Link to="#intro" className="link">
                                        <img src={RyeLogo} alt="" />
                                    </Link>
                                </Col>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Col>
                                        <Link to="#about" className="link">
                                            ABOUT
                                            <div className="link-select" />
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#projects" className="link">
                                            PROJECTS
                                            <div className="link-select" />
                                        </Link>
                                    </Col>
                                </Navbar.Collapse>
                                <Col className="logo">
                                    <Link to="#intro" className="link">
                                        <img src={RyeLogo} alt="" />
                                    </Link>
                                </Col>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Col>
                                        <Link to="#skills" className="link">
                                            SKILLS
                                            <div className="link-select" />
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#work" className="link">
                                            EXPERIENCE
                                            <div className="link-select" />
                                        </Link>
                                    </Col>
                                </Navbar.Collapse>
                            </Row>
                        </Container>
                    </Navbar>
                </div>
                <div className="header-fill" ref="headerFill" />
            </Fragment>
        );
    }
}

export default Header;
