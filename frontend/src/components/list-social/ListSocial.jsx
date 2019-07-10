import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialGeneral from "./SocialGeneral";
import SocialResume from "./SocialResume";
import SocialEmail from "./SocialEmail";

import GitHubIcon from "../../icons/github.svg";
import LinkedInIcon from "../../icons/linkedin.svg";
import EmailIcon from "../../icons/email.svg";
import ResumeIcon from "../../icons/resume.svg";
import Resume from "../../files/resume.pdf";
import "./ListSocial.css";

class ListSocial extends Component {
    state = {
        listSocials: [
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
        ]
    };

    getSocialElement(social) {
        if (social.name === "Resume") {
            return (
                <Col key={social.id}>
                    <SocialResume social={social} />
                </Col>
            );
        } else if (social.name === "Email") {
            return (
                <Col key={social.id}>
                    <SocialEmail social={social} />
                </Col>
            );
        } else {
            return (
                <Col key={social.id}>
                    <SocialGeneral social={social} />
                </Col>
            );
        }
    }

    render() {
        return (
            <Row>
                {this.state.listSocials.map(social => {
                    return this.getSocialElement(social);
                })}
            </Row>
        );
    }
}

export default ListSocial;
