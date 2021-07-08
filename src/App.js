import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Knowledgebase from "./pages/Knowledgebase";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SpellPage from "./components/KB/SpellPage";
import ClassPage from "./components/KB/ClassPage";
import BackgroundPage from "./components/KB/BackgroundPage";
import NotFound from "../src/components/Helpers/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/knowledgebase"
                        component={Knowledgebase}
                    />
                    <Route
                        exact
                        path="/knowledgebase/spells/:index"
                        component={SpellPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/classes/:index"
                        component={ClassPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/backgrounds/:index"
                        component={BackgroundPage}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
