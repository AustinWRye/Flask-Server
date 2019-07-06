import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import GitHubIcon from "../icons/github-icon.png";
import LinkedInIcon from "../icons/linkedin-icon.png";
import EmailIcon from "../icons/email-icon.jpg";
import ResumeIcon from "../icons/resume-icon.png";
import Resume from "../files/resume.pdf";
import "./IconLinks.css";

const iconLinks = [
    {
        id: "1",
        name: "GitHub",
        icon: GitHubIcon,
        link: "https://github.com/AustinWRye"
    },
    {
        id: "2",
        name: "LinkedIn",
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/austinrye/"
    },
    {
        id: "3",
        name: "Email",
        icon: EmailIcon,
        link: null
    },
    {
        id: "4",
        name: "Resume",
        icon: ResumeIcon,
        link: Resume
    }
];

const NormalLink = iconLink => {
    return (
        <a href={iconLink.link}>
            <Row>
                <img src={iconLink.icon} alt={iconLink.name} />
            </Row>
            <Row>
                <span>{iconLink.name}</span>
            </Row>
        </a>
    );
};

class EmailModal extends Component {
    state = {
        show: false
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <React.Fragment>
                <Button variant="link" onClick={this.handleShow}>
                    <Row>
                        <img
                            src={this.props.iconLink.icon}
                            alt={this.props.iconLink.name}
                        />
                    </Row>
                    <Row>
                        <span>{this.props.iconLink.name}</span>
                    </Row>
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    className="email-modal"
                >
                    <Modal.Header>
                        <Modal.Title>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>austinrye@cmail.carleton.ca</Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}

const ResumeLink = iconLink => {
    return (
        <Link to={iconLink.link} target="_blank" download>
            <Row>
                <img src={iconLink.icon} alt={iconLink.name} />
            </Row>
            <Row>
                <span>{iconLink.name}</span>
            </Row>
        </Link>
    );
};

const IconLinks = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                {iconLinks
                    .filter(iconLink => {
                        return (
                            iconLink.name !== "Email" &&
                            iconLink.name !== "Resume"
                        );
                    })
                    .map(iconLink => (
                        <Col
                            key={iconLink.id}
                            className="d-flex justify-content-center icon-item"
                        >
                            {" "}
                            {NormalLink(iconLink)}
                        </Col>
                    ))}
                {iconLinks
                    .filter(iconLink => {
                        return iconLink.name === "Email";
                    })
                    .map(iconLink => (
                        <Col
                            key={iconLink.id}
                            className="d-flex justify-content-center icon-item"
                        >
                            <EmailModal iconLink={iconLink} />
                        </Col>
                    ))}
                {iconLinks
                    .filter(iconLink => {
                        return iconLink.name === "Resume";
                    })
                    .map(iconLink => (
                        <Col
                            key={iconLink.id}
                            className="d-flex justify-content-center icon-item"
                        >
                            {ResumeLink(iconLink)}
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default IconLinks;
