import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Resume from "../files/resume.pdf";
import RyeLogoWhite from "../icons/rye-logo-white.png";
import RyeLogoBlack from "../icons/rye-logo-black.png";
import "./Navigation.css";

class NavigationBar extends Component {
    state = {
        scrolled: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 99) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };

    render() {
        const scrolled = this.state.scrolled ? "scrolled" : null;

        return (
            <Navbar expand="lg" fixed="top" className={scrolled}>
                <Navbar.Brand>
                    <Link to="/" className={"brand link " + scrolled}>
                        <img
                            src={RyeLogoWhite}
                            alt=""
                            className="brand-logo-white"
                        />
                        <img
                            src={RyeLogoBlack}
                            alt=""
                            className="brand-logo-black"
                        />
                        <span className="brand-name">Austin Rye</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse
                    id="navbar-nav"
                    className={"links " + scrolled}
                >
                    <Nav className="mr-auto" />
                    <Nav>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="current-link"
                            className={"link " + scrolled}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeClassName="current-link"
                            className={"link " + scrolled}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/projects"
                            activeClassName="current-link"
                            className={"link " + scrolled}
                        >
                            Projects
                        </NavLink>
                        <Link
                            to={Resume}
                            target="_blank"
                            className={"link " + scrolled}
                            download
                        >
                            Resume
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
