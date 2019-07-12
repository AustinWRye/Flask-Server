import React, { Component } from "react";

import PythonIcon from "../../icons/python.png";
import CSharpIcon from "../../icons/csharp.png";
import CppIcon from "../../icons/cpp.png";
import CIcon from "../../icons/c.png";
import JavaIcon from "../../icons/java.png";
import BashIcon from "../../icons/bash.png";

import HTML5Icon from "../../icons/html5.png";
import CSS3Icon from "../../icons/css3.png";
import JavaScriptIcon from "../../icons/javascript.png";
import BootstrapIcon from "../../icons/bootstrap.png";
import ReactIcon from "../../icons/react.png";
import FlaskIcon from "../../icons/flask.png";
import NodejsIcon from "../../icons/nodejs.png";
import AspDotNetIcon from "../../icons/aspdotnet.png";
import SQLIcon from "../../icons/sql.png";

import WPFIcon from "../../icons/wpf.png";
import SwingIcon from "../../icons/swing.png";
import QtIcon from "../../icons/qt.png";

import LinuxIcon from "../../icons/linux.png";
import ArduinoIcon from "../../icons/arduino.png";
import RaspberryPiIcon from "../../icons/raspberrypi.png";

import GitIcon from "../../icons/git.png";
import GitHubIcon from "../../icons/github-black.svg";
import GitLabIcon from "../../icons/gitlab.png";

import AltiumIcon from "../../icons/altium.png";
import EagleIcon from "../../icons/eagle.png";

import SkillGroup from "./SkillGroup";
import ContentSection from "../../components/content-section/ContentSection";

class Skills extends Component {
    state = {
        skillsList: [
            {
                title: "Languages",
                skills: [
                    {
                        name: "Python",
                        icon: PythonIcon
                    },
                    {
                        name: "C#",
                        icon: CSharpIcon
                    },
                    {
                        name: "C++",
                        icon: CIcon
                    },
                    {
                        name: "C",
                        icon: CppIcon
                    },
                    {
                        name: "Java",
                        icon: JavaIcon
                    },
                    {
                        name: "Bash",
                        icon: BashIcon
                    }
                ]
            },
            {
                title: "Web Development",
                skills: [
                    {
                        name: "HTML5",
                        icon: HTML5Icon
                    },
                    {
                        name: "CSS3",
                        icon: CSS3Icon
                    },
                    {
                        name: "JavaScript",
                        icon: JavaScriptIcon
                    },
                    {
                        name: "Bootstrap",
                        icon: BootstrapIcon
                    },
                    {
                        name: "React",
                        icon: ReactIcon
                    },
                    {
                        name: "Flask",
                        icon: FlaskIcon
                    },
                    {
                        name: "Node.js",
                        icon: NodejsIcon
                    },
                    {
                        name: "ASP.Net",
                        icon: AspDotNetIcon
                    },
                    {
                        name: "SQL",
                        icon: SQLIcon
                    }
                ]
            },
            {
                title: "App Development",
                skills: [
                    {
                        name: "WPF",
                        icon: WPFIcon
                    },
                    {
                        name: "Swing",
                        icon: SwingIcon
                    },
                    {
                        name: "Qt",
                        icon: QtIcon
                    }
                ]
            },
            {
                title: "Systems",
                skills: [
                    {
                        name: "Linux",
                        icon: LinuxIcon
                    },
                    {
                        name: "Arduino",
                        icon: ArduinoIcon
                    },
                    {
                        name: "Raspberry Pi",
                        icon: RaspberryPiIcon
                    }
                ]
            },
            {
                title: "Source Control",
                skills: [
                    {
                        name: "Git",
                        icon: GitIcon
                    },
                    {
                        name: "GitHub",
                        icon: GitHubIcon
                    },
                    {
                        name: "GitLab",
                        icon: GitLabIcon
                    }
                ]
            },
            {
                title: "PCB Design",
                skills: [
                    {
                        name: "Altium Designer",
                        icon: AltiumIcon
                    },
                    {
                        name: "Eagle",
                        icon: EagleIcon
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <section id="skills" className="section section-white">
                <ContentSection>
                    <h2 className="title">SKILLS</h2>
                    {this.state.skillsList.map(skillGroup => {
                        return <SkillGroup skillGroup={skillGroup} />;
                    })}
                </ContentSection>
            </section>
        );
    }
}

export default Skills;
