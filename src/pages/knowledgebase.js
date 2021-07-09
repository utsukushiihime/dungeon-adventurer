import React from "react";

import Layout from "../components/UI/Layout";
import SpellsList from "../components/KB/SpellsList";
import ClassList from "../components/KB/ClassList";
import BackgroundList from "../components/KB/BackgroundList";
import RacesList from "../components/KB/RacesList";
import SubclassList from "../components/KB/SubclassList";
import FeaturesList from "../components/KB/FeaturesList";
import SubracesList from "../components/KB/SubracesList";
import TraitsList from "../components/KB/TraitsList";
import EquipmentCategoryList from "../components/KB/EquipmentCategoryList";
import EquipmentList from "../components/KB/EquipmentList";
import MonstersList from "../components/KB/MonstersList";

const Knowledgebase = (props) => {
    return (
        <Layout>
            <h1 className="mb-3">Knowledgebase</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <BackgroundList backgrounds={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <ClassList classes={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <EquipmentList equipment={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <EquipmentCategoryList equipment={props.index} />
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
                <div className="col-lg-4 mb-4">
                    <SubracesList subrace={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <TraitsList traits={props.index} />
                </div>
                <div className="col-lg-4 mb-4">
                    <MonstersList weapons={props.index} />
                </div>
            </div>
        </Layout>
    );
};

export default Knowledgebase;
