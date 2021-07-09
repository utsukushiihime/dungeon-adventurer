import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const SubracesPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [subrace, setSubrace] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchSubrace() {
            try {
                const response = await axios.get(`/api/subraces/${index}`);
                setSubrace(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchSubrace();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{subrace.name}</h1>

            <h5 className="fw-bold">Race </h5>
            <p>{JSON.stringify(subrace.race, null, 2)}</p>

            <h5 className="fw-bold">Description </h5>
            <p>{JSON.stringify(subrace.desc, null, 2)}</p>

            <h5 className="fw-bold">Ability Bonuses </h5>
            <p>{JSON.stringify(subrace.ability_bonuses, null, 2)}</p>

            <h5 className="fw-bold">Starting Proficiencies </h5>
            <p>{JSON.stringify(subrace.starting_proficiencies, null, 2)}</p>

            <h5 className="fw-bold">Languages </h5>
            <p>{JSON.stringify(subrace.languages, null, 2)}</p>

            <h5 className="fw-bold">Language Options </h5>
            <p>{JSON.stringify(subrace.language_options, null, 2)}</p>

            <h5 className="fw-bold">Racial Traits </h5>
            <p>{JSON.stringify(subrace.racial_traits, null, 2)}</p>
        </Layout>
    );
};

export default SubracesPage;
