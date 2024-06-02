import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import ShowPage from "./Components/ShowPage";
import DataContext from "./Components/Context";
import UserPlan from "./Components/UserPlan";
import PaymentPage from "./Components/PaymentPage";
import SuccessPage from "./Components/SuccessPage";
const App = () => {
    const [data, setData] = useState({ "email": "codebyak@gmail.com", "pass": "12341234" });
    const [inputTitle, setInputTitle] = useState("");
    const [showPage, setShowPage] = useState("");
    const [showUserPage, setShowUserPage] = useState(false);
    const [inputPass, setInputPass] = useState("");

    return (
        <>
            <Header />
            {/* <div className="container"> */}
            <DataContext.Provider value={{ data, setData, inputTitle, setInputTitle, showPage, setShowPage, showUserPage, setShowUserPage, setInputPass, inputPass }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/showpage" element={<ShowPage />}></Route>
                    <Route path="/userplan" element={<UserPlan />}></Route>
                    <Route path="/payment/:plan" element={<PaymentPage />} />
                    <Route path="/success" element={<SuccessPage />} />;
                </Routes>
            </DataContext.Provider>
            {/* </div> */}
            <Footer />
        </>
    );
};

export default App;
