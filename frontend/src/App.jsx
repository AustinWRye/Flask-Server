import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="content">
                <NavigationBar />
                <Router />
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
