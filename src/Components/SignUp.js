import React, { useContext } from "react";

import DataContext from "./Context";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { data, setInputTitle, inputTitle, setShowPage } = useContext(DataContext);

    const checkHandler = () => {
        if (inputTitle === data.email) {
            setShowPage(true);
            setInputTitle("");
        } else {
            setShowPage(false);
            setInputTitle("");
        }
    };
    return (
        <>
            <div className="container text-center">
                <h2 className="p-5">Please Enter Your Email To Check</h2>
                <div className="pb-5">
                    <input
                        type="email"
                        name="email"
                        id=""
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        className="w-25 p-1 me-3"
                        placeholder="Please Enter Your Email To Check"
                    required/>
                    <Link to="/showpage">
                        <button className="btn btn-primary" onClick={checkHandler}>
                            Check
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SignUp;
