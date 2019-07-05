import React, { Component } from "react";

import NavigationBar from "../../components/NavigationBar";
import JumboImg from "./JumboImg";
import BlueLagoon from "./blue-lagoon-moonlight-iceland.jpg";
import Intro from "./Intro";
import Technologies from "./Technologies";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <JumboImg img={BlueLagoon}>
                    <Intro />
                </JumboImg>
                <Technologies />
            </React.Fragment>
        );
    }
}

export default Home;
