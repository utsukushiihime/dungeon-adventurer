import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const SpellsList = () => {
    const [items, setItems] = useState([]);
    const BASE_URL = `https://www.dnd5eapi.co`;
    const spells = `${BASE_URL}/api/spells`;

    useEffect(() => {
        axios
            .get(`${spells}`)
            .then((response) => {
                console.log(response.data.results);
                setItems(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [spells]);

    return (
        <div className="container">
            <h1>Spells</h1>
            {items.map((item, index) => (
                <div key={index}>
                    <h4>{item.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default SpellsList;
