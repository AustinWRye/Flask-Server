import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import SocialsGeneral from "./SocialsGeneral";
import SocialsResume from "./SocialsResume";
import SocialsEmail from "./SocialsEmail";

import GitHubIcon from "../../icons/github.svg";
import LinkedInIcon from "../../icons/linkedin.svg";
import EmailIcon from "../../icons/email.svg";
import ResumeIcon from "../../icons/resume.svg";
import Resume from "../../files/resume.pdf";
import "./SocialsList.scss";

class SocialsList extends Component {
    state = {
        socialsList: [
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
            return <SocialsResume social={social} />;
        } else if (social.name === "Email") {
            return <SocialsEmail social={social} />;
        } else {
            return <SocialsGeneral social={social} />;
        }
    }

    render() {
        return (
            <Row className="socials-list">
                {this.state.socialsList.map(social => {
                    return <Col key={social.id}>
                        {this.getSocialElement(social)}
                    </Col>;
                })}
            </Row>
        );
    }
}

export default SocialsList;
