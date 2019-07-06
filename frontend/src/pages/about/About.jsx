import React, { Component } from "react";

import MainHeader from "./MainHeader";
import SectionHeader from "./SectionHeader";
import Clubs from "./Clubs";
import Societies from "./Societies";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeader>Clubs</MainHeader>
                <Clubs />
                <SectionHeader>Societies</SectionHeader>
                <Societies />
            </React.Fragment>
        );
    }
}

export default About;
