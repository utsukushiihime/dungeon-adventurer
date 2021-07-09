import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const SubracesList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [subRaceList, setSubracesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSubracesList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/subraces/");
                setSubracesList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchSubracesList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container max-items bg-dark sticky-top bg-dark pb-2">
            <h1 className="text-danger">Subraces</h1>
            {subRaceList.map((subrace, key) => (
                <Link key={key} to={`/knowledgebase/subraces/${subrace.index}`}>
                    <div className="text-white">
                        <RiArrowDropRightLine /> {subrace.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubracesList;
