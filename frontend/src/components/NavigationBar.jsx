import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

class NavigationBar extends Component {
    // state = {
    //     scroll: UnScrolled
    // };

    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = () => {
    //     if (window.scrollY > 100) {
    //         this.setState({ scroll: Scrolled });
    //     } else {
    //         this.setState({ scroll: UnScrolled });
    //     }
    // };

    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand>
                    <Link to="/" className="link">
                        Austin Rye
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/" className="link">
                            Home
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/about" className="link">
                            About
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
