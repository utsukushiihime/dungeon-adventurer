import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Knowledgebase from "./pages/Knowledgebase";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import KBItem from "../src/components/KB/KBItem";
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
                    {/* <Route path="/knowledgebase/:name" component={KBItem} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
