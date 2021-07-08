import React from "react";

import Nav from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Nav />
            <main>
                <div className="container my-5">{props.children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
