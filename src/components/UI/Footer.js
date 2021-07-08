import React from "react";
import { TiHeart } from "react-icons/ti";

const Footer = () => {
    return (
        <>
            <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <span className="text-muted">
                                &copy; {new Date().getFullYear()} - Dungeon
                                Adventurer. All Rights Reserved. Founded in
                                2021.
                            </span>
                        </div>
                        <div className="col-4 text-right">
                            <span className="text-muted float-end text-right">
                                Made with <TiHeart className="text-danger" /> by
                                Creativarian.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
