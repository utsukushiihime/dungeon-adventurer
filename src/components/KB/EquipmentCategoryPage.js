import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const EquipmentCategoryPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [equipmentItem, setEquipmentItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchEquipmentItem() {
            try {
                const response = await axios.get(
                    `/api/equipment-categories/${index}`
                );
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

            <h5 className="fw-bold">Equipment </h5>
            <p>{JSON.stringify(equipmentItem.equipment, null, 2)}</p>
        </Layout>
    );
};

export default EquipmentCategoryPage;
