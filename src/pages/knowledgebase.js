import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";

const Knowledgebase = (props) => {
    return (
        <Layout>
            <SpellsList spells={props.index} />
        </Layout>
    );
};

export default Knowledgebase;
