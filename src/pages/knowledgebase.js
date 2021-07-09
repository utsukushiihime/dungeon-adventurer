import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";
import ClassList from "../components/KB/ClassList";
import BackgroundList from "../components/KB/BackgroundList";
import RacesList from "../components/KB/RacesList";
import SubclassList from "../components/KB/SubclassList";
import FeaturesList from "../components/KB/FeaturesList";

const Knowledgebase = (props) => {
    return (
        <Layout>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <BackgroundList backgrounds={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <ClassList classes={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <FeaturesList features={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <RacesList races={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <SpellsList spells={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <SubclassList subclass={props.index} />
                </div>
            </div>
        </Layout>
    );
};

export default Knowledgebase;
