import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const MonstersList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [weaponsList, setMonstersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMonstersList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/monsters/");
                setMonstersList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchMonstersList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container max-items bg-dark">
            <h1 className="text-danger sticky-top bg-dark pb-2">Monsters</h1>
            {weaponsList.map((monsters, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/monsters/${monsters.index}`}
                >
                    <div className="text-white">
                        <RiArrowDropRightLine /> {monsters.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MonstersList;
