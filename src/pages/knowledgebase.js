import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/UI/Layout";
import axios from "axios";

const Knowledgebase = () => {
    const [items, setItems] = useState([]);
    const BASE_URL = "https://www.dnd5eapi.co/api/";

    useEffect(() => {
        axios
            .get(`${BASE_URL}`)
            .then((response) => {
                console.log(response);
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Layout>
            <h1>{items.name}</h1>
            {items.name}
        </Layout>
    );
};

export default Knowledgebase;
