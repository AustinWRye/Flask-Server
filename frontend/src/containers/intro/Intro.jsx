import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialsList from "../../components/socials-list/SocialsList";
import "./Intro.scss";

class Intro extends Component {
    state = {
        hide: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        // Title fade on scroll
        let height = this.refs.intro.clientHeight;
        if (window.pageYOffset >= height * 0.25) {
            this.refs.title.classList.add("hide");
            this.setState({ hide: true });
        } else {
            this.refs.title.classList.remove("hide");
            this.setState({ hide: false });
        }
    };

    render() {
        return (
            <section id="intro" ref="intro">
                <Container fluid className="h-100">
                    <Row className="h-100" ref="title">
                        <Col className="align-self-center">
                            <h3 className="subtitle">
                                SOFTWARE/ELECTRICAL ENGINEERING
                            </h3>
                            <h1 className="title">AUSTIN RYE</h1>
                            <div className="seperator"><hr /></div>
                            <div className="d-flex justify-content-center">
                                <SocialsList />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Intro;
