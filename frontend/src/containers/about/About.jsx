import React from "react";

import ContentSection from "../../components/content-section/ContentSection";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="section section-white">
            <ContentSection>
                <h2 className="title">ABOUT</h2>
                <p className="quote">
                    “Success is no accident. It is hard work, perseverance,
                    learning, studying, sacrifice and most of all, love of what
                    you are doing or learning to do.”
                </p>
                <p>
                    My name is Austin Rye. I'm an electrical engineering student
                    with over 4 years of experience in circuit design, embedded
                    systems and software development. I've been a part of a many
                    successful team projects and continue to seek out
                    opportunities to better myself.
                </p>
                <p>
                    As a passionate challenge seeker, I love using my curiosity,
                    inspiration and work ethic to solve difficult and unique
                    problems. That's why I'm excited to use my dedication and
                    problem solving skills to make the next big impact.
                </p>
            </ContentSection>
        </section>
    );
};

export default About;
