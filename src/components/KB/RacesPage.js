import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const RacesPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [race, setRace] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchRace() {
            try {
                const response = await axios.get(`/api/races/${index}`);
                setRace(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchRace();
    }, [index]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Layout>
            <h1>{race.name}</h1>

            <h5 className="fw-bold">Speed: </h5>
            <p>{JSON.stringify(race.speed, null, 2)}</p>

            <h5 className="fw-bold">Ability Bonuses: </h5>
            <p>{JSON.stringify(race.ability_bonuses, null, 2)}</p>

            <h5 className="fw-bold">Alignment: </h5>
            <p>{race.alignment}</p>

            <h5 className="fw-bold">Age: </h5>
            <p>{race.age}</p>

            <h5 className="fw-bold">Size: </h5>
            <p>{race.size}</p>

            <h5 className="fw-bold">Size Description: </h5>
            <p>{race.size_description}</p>

            <h5 className="fw-bold">Starting Proficiencies: </h5>
            <p>{JSON.stringify(race.starting_proficiencies, null, 2)}</p>

            <h5 className="fw-bold">Starting Proficiency Options: </h5>
            <p>{JSON.stringify(race.starting_proficiency_options, null, 2)}</p>

            <h5 className="fw-bold">Languages: </h5>
            <p>{JSON.stringify(race.languages, null, 2)}</p>

            <h5 className="fw-bold">Language Description: </h5>
            <p>{race.language_desc}</p>

            <h5 className="fw-bold">Traits: </h5>
            <p>{JSON.stringify(race.traits, null, 2)}</p>

            <h5 className="fw-bold">Subraces: </h5>
            <p>{JSON.stringify(race.subraces, null, 2)}</p>
        </Layout>
    );
};

export default RacesPage;
