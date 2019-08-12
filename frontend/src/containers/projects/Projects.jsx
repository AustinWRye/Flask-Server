import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import PersonalWebsiteImg from "../../images/personal-website.png";
import ProjectGroup from "./ProjectGroup";

class Projects extends Component {
    state = {
        projectList: [
            {
                id: 1,
                title: "Personal Website",
                image: PersonalWebsiteImg,
                technologies: [
                    "Python",
                    "Flask",
                    "HTML5",
                    "CSS3",
                    "ReactJS",
                    "Linux"
                ],
                description:
                    "Personal website for displaying projects, skills and experience"
            }
        ]
    };

    render() {
        return (
            <section id="projects">
                <Container fluid>
                    <Row className="heading">
                        <h2>PROJECTS</h2>
                    </Row>
                </Container>
                <Container className="project-groups" fluid>
                    {this.state.projectList.map((projectGroup, id) => {
                        if (id === 0) {
                            return (
                                <div key={projectGroup.id} className="project-group">
                                    <ProjectGroup projectGroup={projectGroup} />
                                </div>
                            );
                        } else {
                            return (
                                <div key={projectGroup.id} className="project-group">
                                    <hr />
                                    <ProjectGroup projectGroup={projectGroup} />
                                </div>
                            );
                        }
                    })}
                </Container>
            </section>
        );
    }
}

export default Projects;
