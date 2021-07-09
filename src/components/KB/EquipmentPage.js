import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const EquipmentPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [equipmentItem, setEquipmentItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchEquipmentItem() {
            try {
                const response = await axios.get(`/api/equipment/${index}`);
                setEquipmentItem(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchEquipmentItem();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{equipmentItem.name}</h1>

            <h5 className="fw-bold">Equipment Category </h5>
            <p>{JSON.stringify(equipmentItem.equipment_category, null, 2)}</p>

            <h5 className="fw-bold">Weapon Category </h5>
            <p>{equipmentItem.weapon_category}</p>

            <h5 className="fw-bold">Weapon Range </h5>
            <p>{equipmentItem.weapon_range}</p>

            <h5 className="fw-bold">Cost </h5>
            <p>{JSON.stringify(equipmentItem.cost, null, 2)}</p>

            <h5 className="fw-bold">Damage </h5>
            <p>{JSON.stringify(equipmentItem.damage, null, 2)}</p>

            <h5 className="fw-bold">Two-handed Damage </h5>
            <p>{JSON.stringify(equipmentItem.two_handed_damage, null, 2)}</p>

            <h5 className="fw-bold">Range </h5>
            <p>{JSON.stringify(equipmentItem.range, null, 2)}</p>

            <h5 className="fw-bold">Weight </h5>
            <p>{equipmentItem.weight}</p>

            <h5 className="fw-bold">Properties </h5>
            <p>{JSON.stringify(equipmentItem.properties, null, 2)}</p>
        </Layout>
    );
};

export default EquipmentPage;
