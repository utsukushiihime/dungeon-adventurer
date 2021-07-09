import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

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

import RacesPage from "./components/KB/RacesPage";
import SubclassPage from "./components/KB/SubclassPage";
import FeaturesPage from "./components/KB/FeaturesPage";
import SubracesPage from "./components/KB/SubracesPage";
import TraitsPage from "./components/KB/TraitsPage";

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
                    <Route
                        exact
                        path="/knowledgebase/races/:index"
                        component={RacesPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/subclasses/:index"
                        component={SubclassPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/features/:index"
                        component={FeaturesPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/subraces/:index"
                        component={SubracesPage}
                    />
                    <Route
                        exact
                        path="/knowledgebase/traits/:index"
                        component={TraitsPage}
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
