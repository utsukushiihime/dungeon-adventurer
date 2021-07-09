import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const SpellPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [spell, setSpell] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchSpell() {
            try {
                const response = await axios.get(`/api/spells/${index}`);
                setSpell(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchSpell();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{spell.name}</h1>
            <div className="row">
                <div className="col-lg-6 pe-4 col-md-12 col-sm-12">
                    <h5 className="fw-bold">Description </h5>
                    <p>{spell.desc}</p>

                    <h5 className="fw-bold">Higher Level </h5>
                    <p>{spell.higher_level}</p>

                    <h5 className="fw-bold">Range </h5>
                    <p>{spell.range}</p>

                    <h5 className="fw-bold">Components </h5>
                    <p>{spell.components}</p>

                    <h5 className="fw-bold">Material </h5>
                    <p>{spell.material}</p>

                    <h5 className="fw-bold">Ritual </h5>
                    <p>{spell.ritual}</p>
                </div>

                <div className="col-lg-6 ps-4 col-md-12 col-sm-12">
                    <h5 className="fw-bold">Duration </h5>
                    <p>{spell.duration}</p>

                    <h5 className="fw-bold">Concentration </h5>
                    <p>{spell.concentration}</p>

                    <h5 className="fw-bold">Casting Time </h5>
                    <p>{spell.casting_time}</p>

                    <h5 className="fw-bold">Level </h5>
                    <p>{spell.level}</p>

                    <h5 className="fw-bold">Attack Type </h5>
                    <p>{spell.attack_type}</p>

                    {/* TODO fix data object display - Format JSON response */}

                    <h5 className="fw-bold">Damage </h5>
                    <p>{JSON.stringify(spell.damage, null, 2)}</p>

                    <h5 className="fw-bold">School </h5>
                    <p>{JSON.stringify(spell.school, null, 2)}</p>

                    <h5 className="fw-bold">Classes </h5>
                    <p>{JSON.stringify(spell.classes, null, 2)}</p>

                    <h5 className="fw-bold">Subclasses </h5>
                    <p>{JSON.stringify(spell.subclasses, null, 2)}</p>
                </div>
            </div>
        </Layout>
    );
};

export default SpellPage;
