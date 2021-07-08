import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        return <div>Loading spells...</div>;
    }
    if (error) {
        return <div>Error loading spells: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Backgrounds</h1>
            {backgroundList.map((background, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/backgrounds/${background.index}`}
                >
                    <h5>{background.name}</h5>
                </Link>
            ))}
        </div>
    );
};

export default BackgroundList;
