import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../UI/Layout";

const MonstersPage = () => {
    axios.defaults.baseURL = "https://www.dnd5eapi.co";
    const [monsterItem, setMonsterItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { index } = useParams();

    useEffect(() => {
        async function fetchMonsterItem() {
            try {
                const response = await axios.get(`/api/monsters/${index}`);
                setMonsterItem(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }
        fetchMonsterItem();
    }, [index]);

    if (loading) {
        return <div className="mt-5 text-center fw-bold">Loading...</div>;
    }
    if (error) {
        return <div>Error loading: {error}</div>;
    }

    return (
        <Layout>
            <h1>{monsterItem.name}</h1>
            <div className="row">
                <div className="col">
                    <h5 className="fw-bold">Size </h5>
                    <p>{monsterItem.size}</p>

                    <h5 className="fw-bold">Type </h5>
                    <p>{monsterItem.type}</p>

                    <h5 className="fw-bold">Subtype </h5>
                    <p>{monsterItem.subtype}</p>

                    <h5 className="fw-bold">Alignment </h5>
                    <p>{monsterItem.alignment}</p>

                    <h5 className="fw-bold">Armor Class </h5>
                    <p>{monsterItem.armor_class}</p>

                    <h5 className="fw-bold">Hit Points </h5>
                    <p>{monsterItem.hit_points}</p>

                    <h5 className="fw-bold">Hit Dice </h5>
                    <p>{monsterItem.hit_dice}</p>

                    <h5 className="fw-bold">Forms </h5>
                    <p>{JSON.stringify(monsterItem.forms, null, 2)}</p>

                    <h5 className="fw-bold">Speed </h5>
                    <p>{JSON.stringify(monsterItem.speed, null, 2)}</p>

                    <h5 className="fw-bold">Strength </h5>
                    <p>{monsterItem.strength}</p>

                    <h5 className="fw-bold">Dexterity </h5>
                    <p>{monsterItem.dexterity}</p>

                    <h5 className="fw-bold">Constitution </h5>
                    <p>{monsterItem.constitution}</p>

                    <h5 className="fw-bold">Intelligence </h5>
                    <p>{monsterItem.intelligence}</p>

                    <h5 className="fw-bold">Wisdom </h5>
                    <p>{monsterItem.wisdom}</p>

                    <h5 className="fw-bold">Charisma </h5>
                    <p>{monsterItem.charisma}</p>

                    <h5 className="fw-bold">Proficiencies </h5>
                    <p>{JSON.stringify(monsterItem.proficiencies, null, 2)}</p>

                    <h5 className="fw-bold">Damage Vulnerabilities </h5>
                    <p>
                        {JSON.stringify(
                            monsterItem.damage_vulnerabilities,
                            null,
                            2
                        )}
                    </p>

                    <h5 className="fw-bold">Damage Resistances </h5>
                    <p>
                        {JSON.stringify(
                            monsterItem.damage_resistances,
                            null,
                            2
                        )}
                    </p>

                    <h5 className="fw-bold">Damage Immunities </h5>
                    <p>
                        {JSON.stringify(monsterItem.damage_immunities, null, 2)}
                    </p>

                    <h5 className="fw-bold">Condition Immunities </h5>
                    <p>
                        {JSON.stringify(
                            monsterItem.condition_immunities,
                            null,
                            2
                        )}
                    </p>

                    <h5 className="fw-bold">Senses </h5>
                    <p>{JSON.stringify(monsterItem.senses, null, 2)}</p>
                </div>
                <div className="col">
                    <h5 className="fw-bold">Languages </h5>
                    <p>{monsterItem.languages}</p>

                    <h5 className="fw-bold">Challenge Rating </h5>
                    <p>{monsterItem.challenge_rating}</p>

                    <h5 className="fw-bold">Special Abilities </h5>
                    <p>
                        {JSON.stringify(monsterItem.special_abilities, null, 2)}
                    </p>

                    <h5 className="fw-bold">Actions </h5>
                    <p>{JSON.stringify(monsterItem.actions, null, 2)}</p>

                    <h5 className="fw-bold">Legendary Actions </h5>
                    <p>
                        {JSON.stringify(monsterItem.legendary_actions, null, 2)}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default MonstersPage;
