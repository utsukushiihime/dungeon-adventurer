import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClassList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [classList, setClassList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchClassList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/classes/");
                setClassList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchClassList();
    }, []);

    if (loading) {
        return <div>Loading spells...</div>;
    }
    if (error) {
        return <div>Error loading spells: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Classes</h1>
            {classList.map((classItem, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/classes/${classItem.index}`}
                >
                    <h5>{classItem.name}</h5>
                </Link>
            ))}
        </div>
    );
};

export default ClassList;
