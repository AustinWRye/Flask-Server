import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ListSocial from "../../components/list-social/ListSocial";
import "./Intro.css";

class Intro extends Component {
    state = {
        hide: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        // Title fade
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
            <section id="intro" className="section section-trans" ref="intro">
                <Container>
                    <div className="title" ref="title">
                        <h2 className="subtitle">
                            SOFTWARE/ELECTRICAL ENGINEERING
                        </h2>
                        <h1 className="title">AUSTIN RYE</h1>
                        <hr className="seperator" />
                        <Container className="d-flex justify-content-center list-social">
                            <ListSocial />
                        </Container>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Intro;
