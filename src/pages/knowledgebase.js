import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";

const knowledgebase = (props) => {
    return (
        <Layout>
            <SpellsList spells={props.spells} />
        </Layout>
    );
};

export default knowledgebase;
