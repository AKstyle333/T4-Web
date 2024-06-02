import React, { useContext } from "react";
import Login from "./Login";
import Register from "./Register";
import DataContext from "./Context";
const ShowPage = () => {
    const { showPage } = useContext(DataContext);
// console.log(showPage);
    return (
        <>
            <div className="container">{showPage === true ? <Login /> : showPage === false ? <Register /> : null}</div>
        </>
    );
};

export default ShowPage;
