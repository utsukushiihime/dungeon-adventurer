import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const FeaturesList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [featuresList, setFeaturesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFeaturesList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/features/");
                setFeaturesList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchFeaturesList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Features</h1>
            {featuresList.map((feature, key) => (
                <Link key={key} to={`/knowledgebase/features/${feature.index}`}>
                    <div>
                        <RiArrowDropRightLine /> {feature.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FeaturesList;
