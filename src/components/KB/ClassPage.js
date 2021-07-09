import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const SpellPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [classItem, setClassItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchClassItem() {
            try {
                const response = await axios.get(`/api/classes/${index}`);
                setClassItem(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchClassItem();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{classItem.name}</h1>

            <h5 className="fw-bold">Hit Die </h5>
            <p>{classItem.hit_die}</p>

            <h5 className="fw-bold">Proficiency Choices </h5>
            <p>{JSON.stringify(classItem.proficiency_choices, null, 2)}</p>

            <h5 className="fw-bold">Proficiencies </h5>
            <p>{JSON.stringify(classItem.proficiencies, null, 2)}</p>

            <h5 className="fw-bold">Saving Throws </h5>
            <p>{JSON.stringify(classItem.saving_throws, null, 2)}</p>

            <h5 className="fw-bold">Starting Equipment </h5>
            <p>{JSON.stringify(classItem.starting_equipment, null, 2)}</p>

            <h5 className="fw-bold">Starting Equipment Options </h5>
            <p>
                {JSON.stringify(classItem.starting_equipment_options, null, 2)}
            </p>

            <h5 className="fw-bold">Subclasses </h5>
            <p>{JSON.stringify(classItem.subclasses, null, 2)}</p>

            <h5 className="fw-bold">Spellcasting </h5>
            <p>{JSON.stringify(classItem.spellcasting, null, 2)}</p>

            <h5 className="fw-bold">Spells </h5>
            <p>{JSON.stringify(classItem.spells, null, 2)}</p>
        </Layout>
    );
};

export default SpellPage;
