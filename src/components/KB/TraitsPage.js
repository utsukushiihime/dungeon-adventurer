import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const TraitsPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [traits, setTrait] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchTrait() {
            try {
                const response = await axios.get(`/api/traits/${index}`);
                setTrait(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchTrait();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{traits.name}</h1>

            <h5 className="fw-bold">Races </h5>
            <p>{JSON.stringify(traits.races, null, 2)}</p>

            <h5 className="fw-bold">Subraces </h5>
            <p>{JSON.stringify(traits.subraces, null, 2)}</p>

            <h5 className="fw-bold">Description </h5>
            <p>{JSON.stringify(traits.desc, null, 2)}</p>

            <h5 className="fw-bold">Proficiencies </h5>
            <p>{JSON.stringify(traits.proficiencies, null, 2)}</p>

            <h5 className="fw-bold">Proficiency Choices </h5>
            <p>{JSON.stringify(traits.proficiency_choices, null, 2)}</p>

            <h5 className="fw-bold">Trait Specific </h5>
            <p>{JSON.stringify(traits.trait_specific, null, 2)}</p>
        </Layout>
    );
};

export default TraitsPage;
