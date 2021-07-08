import React from "react";

import Nav from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Nav />
            <div className="container">{props.children}</div>
            <Footer />
        </>
    );
};

export default Layout;
