import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { RiArrowDropRightLine } from "react-icons/ri";

const EquipmentCategoryList = (props) => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEquipmentList() {
            setLoading(true);
            try {
                const response = await axios.get("/api/equipment-categories/");
                setEquipmentList(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchEquipmentList();
    }, []);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <div className="container max-items bg-dark">
            <h1 className="text-danger sticky-top bg-dark pb-2">
                Equipment Categories
            </h1>
            {equipmentList.map((equipment, key) => (
                <Link
                    key={key}
                    to={`/knowledgebase/equipment-categories/${equipment.index}`}
                >
                    <div className="text-white">
                        <RiArrowDropRightLine /> {equipment.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EquipmentCategoryList;
