import React, { Component, Fragment } from "react";

import PersonalWebsiteImg from "../../images/personal-website.png";
import CPRTImg from "../../images/cprt-waldo.jpg";
import CUinSpaceImg from "../../images/cuinspace-rocket.png";

import ProjectGroup from "./ProjectGroup";
import ContentSection from "../../components/content-section/ContentSection";

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
            },
            {
                id: 2,
                title: "App",
                image: CPRTImg,
                technologies: ["Flask", "HTML5", "CSS3", "ReactJS"],
                description: "Application on the phone"
            },
            {
                id: 3,
                title: "Server",
                image: CUinSpaceImg,
                technologies: ["Flask", "HTML5", "CSS3", "ReactJS"],
                description: "Home server for running web api's"
            }
        ]
    };

    render() {
        return (
            <section id="projects" className="section section-light-grey">
                <ContentSection>
                    <h2 className="title">PROJECTS</h2>
                    {this.state.projectList.map((projectGroup, id) => {
                        if (id === 0) {
                            return (
                                <Fragment key={projectGroup.id}>
                                    <ProjectGroup projectGroup={projectGroup} />
                                </Fragment>
                            );
                        } else {
                            return (
                                <Fragment key={projectGroup.id}>
                                    <hr />
                                    <ProjectGroup projectGroup={projectGroup} />
                                </Fragment>
                            );
                        }
                    })}
                </ContentSection>
            </section>
        );
    }
}

export default Projects;
