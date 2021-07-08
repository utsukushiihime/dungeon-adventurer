import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const SubclassPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [subClass, setSubClass] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchSubclassItem() {
            try {
                const response = await axios.get(`/api/subclasses/${index}`);
                setSubClass(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchSubclassItem();
    }, [index]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{subClass.name}</h1>

            <h5>Subclass Flavor: </h5>
            <p>{subClass.subclass_flavor}</p>

            <h5 className="fw-bold">Description: </h5>
            <p>{JSON.stringify(subClass.desc, null, 2)}</p>

            <h5>Subclass Levels: </h5>
            <p>{subClass.subclass_levels}</p>
        </Layout>
    );
};

export default SubclassPage;
