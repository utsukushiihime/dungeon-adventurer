import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const SubclassList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [subClassList, setSubclassList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSubclassList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/subclasses/");
                setSubclassList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchSubclassList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container max-items bg-dark">
            <h1 className="text-danger sticky-top bg-dark pb-2">Subclasses</h1>
            {subClassList.map((subClass, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/subclasses/${subClass.index}`}
                >
                    <div className="text-white">
                        <RiArrowDropRightLine /> {subClass.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubclassList;
