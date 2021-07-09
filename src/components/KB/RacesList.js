import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RacesList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [racesList, setRacesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRacesList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/races/");
                setRacesList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchRacesList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Races</h1>
            {racesList.map((race, key) => (
                <Link key={key} to={`/knowledgebase/races/${race.index}`}>
                    <div>{race.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default RacesList;
