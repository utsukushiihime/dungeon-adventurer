import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            <main className="pt-5">
                <div className="container my-5">{props.children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
