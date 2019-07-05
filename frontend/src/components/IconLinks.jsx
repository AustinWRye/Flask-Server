import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./IconLinks.css";
import GitHubIcon from "./icons/github-icon.png";
import LinkedInIcon from "./icons/linkedin-icon.png";

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
    }
];

const IconLinks = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                {iconLinks.map(iconLink => (
                    <Col
                        key={iconLink.id}
                        className="d-flex justify-content-center icon-item"
                    >
                        <a href={iconLink.link}>
                            <Row>
                                <img src={iconLink.icon} />
                            </Row>
                            <Row>
                                <span>{iconLink.name}</span>
                            </Row>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IconLinks;
