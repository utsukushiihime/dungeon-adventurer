import React from "react";

import Layout from "../components/UI/Layout";
import KBList from "../components/KB/KBList";

const knowledgebase = (props) => {
    return (
        <Layout>
            <KBList spells={props.spells} />
        </Layout>
    );
};

export default knowledgebase;
