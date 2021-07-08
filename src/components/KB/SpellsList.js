import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SpellsList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [spells, setSpells] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSpells() {
            setLoading(true);
            try {
                const response = await axios.get("/api/spells/");
                setSpells(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchSpells();
    }, []);

    if (loading) {
        return <div>Loading spells...</div>;
    }
    if (error) {
        return <div>Error loading spells: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Spells</h1>
            {spells.map((spell, key) => (
                <Link key={key} to={`/knowledgebase/spells/${spell.index}`}>
                    <h5>{spell.name}</h5>
                </Link>
            ))}
        </div>
    );
};

export default SpellsList;
