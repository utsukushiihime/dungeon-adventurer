import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const TraitsList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [traitsList, setTraitList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTraits() {
            setLoading(true);
            try {
                const response = await axios.get("/api/traits/");
                setTraitList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchTraits();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container max-items bg-dark">
            <h1 className="text-danger sticky-top bg-dark pb-2">Traits</h1>
            {traitsList.map((trait, key) => (
                <Link key={key} to={`/knowledgebase/traits/${trait.index}`}>
                    <div className="text-white">
                        <RiArrowDropRightLine /> {trait.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TraitsList;
