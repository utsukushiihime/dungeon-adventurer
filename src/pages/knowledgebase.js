import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";
import ClassList from "../components/KB/ClassList";

const Knowledgebase = (props) => {
    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <SpellsList spells={props.index} />
                </div>
                <div className="col">
                    <ClassList spells={props.index} />
                </div>
            </div>
        </Layout>
    );
};

export default Knowledgebase;
