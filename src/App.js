import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <>
                <Header />
            {/* <div className="container"> */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            {/* </div> */}
                <Footer />
        </>
    );
};

export default App;
