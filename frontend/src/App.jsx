import React from "react";
import { BrowserRouter } from "react-router-dom";

import Intro from "./containers/intro/Intro";
import Header from "./components/header/Header";
import About from "./containers/about/About";
import Projects from "./containers/projects/Projects";
import Skills from "./containers/skills/Skills";
import Experience from "./containers/experience/Experience";
// import Router from "./components/Router";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div id="content">
                <div className="main-bg">
                    <Intro />
                    <Header />
                </div>
                <About />
                <Projects />
                <Skills />
                <Experience />
                {/* <Router /> */}
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
