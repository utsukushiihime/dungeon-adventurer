import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const BackgroundList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [backgroundList, setBackgroundList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBackgroundList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/backgrounds/");
                setBackgroundList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchBackgroundList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Backgrounds</h1>
            {backgroundList.map((background, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/backgrounds/${background.index}`}
                >
                    <div>
                        <RiArrowDropRightLine /> {background.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BackgroundList;
