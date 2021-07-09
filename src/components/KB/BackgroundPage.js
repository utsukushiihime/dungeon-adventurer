import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const SpellPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [backgroundItem, setBackgroundItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchBackgroundItem() {
            try {
                const response = await axios.get(`/api/backgrounds/${index}`);
                setBackgroundItem(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchBackgroundItem();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{backgroundItem.name}</h1>

            <h5 className="fw-bold">Hit Die </h5>
            <p>{backgroundItem.hit_die}</p>

            <h5 className="fw-bold">Starting Proficiencies </h5>
            <p>
                {JSON.stringify(backgroundItem.starting_proficiencies, null, 2)}
            </p>

            <h5 className="fw-bold">Language Options </h5>
            <p>{JSON.stringify(backgroundItem.language_options, null, 2)}</p>

            <h5 className="fw-bold">Starting Equipment </h5>
            <p>{JSON.stringify(backgroundItem.starting_equipment, null, 2)}</p>

            <h5 className="fw-bold">Feature </h5>
            <p>{JSON.stringify(backgroundItem.feature, null, 2)}</p>

            <h5 className="fw-bold">Personality Traits </h5>
            <p>{JSON.stringify(backgroundItem.personality_traits, null, 2)}</p>

            <h5 className="fw-bold">Ideals </h5>
            <p>{JSON.stringify(backgroundItem.ideals, null, 2)}</p>

            <h5 className="fw-bold">Bonds </h5>
            <p>{JSON.stringify(backgroundItem.bonds, null, 2)}</p>

            <h5 className="fw-bold">Flaws </h5>
            <p>{JSON.stringify(backgroundItem.flaws, null, 2)}</p>
        </Layout>
    );
};

export default SpellPage;
