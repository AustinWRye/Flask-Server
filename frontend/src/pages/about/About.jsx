import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar";
import "./About.css";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <p>About</p>
            </React.Fragment>
        );
    }
}

export default About;
