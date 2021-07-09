import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const FeaturesPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [feature, setFeature] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchFeature() {
            try {
                const response = await axios.get(`/api/features/${index}`);
                setFeature(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchFeature();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{feature.name}</h1>

            <h5 className="fw-bold">Level</h5>
            <p>{feature.level}</p>

            <h5 className="fw-bold">Class </h5>
            <p>{JSON.stringify(feature.class, null, 2)}</p>

            <h5 className="fw-bold">Subclass </h5>
            <p>{JSON.stringify(feature.subclass, null, 2)}</p>

            <h5 className="fw-bold">Description </h5>
            <p>{JSON.stringify(feature.desc, null, 2)}</p>

            <h5 className="fw-bold">Feature Specific </h5>
            <p>{JSON.stringify(feature.feature_specific, null, 2)}</p>
        </Layout>
    );
};

export default FeaturesPage;
