import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";
import ClassList from "../components/KB/ClassList";
import BackgroundList from "../components/KB/BackgroundList";

const Knowledgebase = (props) => {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <SpellsList spells={props.index} />
                </div>
                <div className="col">
                    <ClassList classes={props.index} />
                </div>
                <div className="col">
                    <BackgroundList backgrounds={props.index} />
                </div>
            </div>
        </Layout>
    );
};

export default Knowledgebase;
