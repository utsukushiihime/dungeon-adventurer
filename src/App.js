import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/home";
import About from "../src/pages/about";
import Contact from "../src/pages/contact";
import Knowledgebase from "../src/pages/knowledgebase";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import NotFound from "../src/components/Helpers/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/knowledgebase" component={Knowledgebase} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
