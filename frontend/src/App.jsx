import React from "react";
import { BrowserRouter } from "react-router-dom";

import Intro from "./containers/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/about/About";
import Router from "./components/Router";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div id="content">
                <Intro />
                <Navbar />
                <About />
                {/* <Router /> */}
            </div>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;
