import React, { useContext } from "react";
import DataContext from "./Context";
import { Link } from "react-router-dom";

const Login = () => {
    const { data, inputTitle, setInputTitle, setShowUserPage, inputPass, setInputPass } = useContext(DataContext);
    console.log(data);
    console.log(inputPass);
    const credentialHandler = () =>{
        if (inputTitle === data.email &&  inputPass === data.pass) {
            console.log(data.email);
            console.log(data.pass);
            setShowUserPage(true);
            setInputTitle("");
setInputPass("");
        } else {
            setShowUserPage(false);
            setInputTitle("");
            setInputPass("");
        }
    }
    return (
        <>
            <h2 className="py-5">Login Your Account</h2>

            <form className="pb-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" value={inputPass} onChange={(e) => setInputPass(e.target.value)} id="exampleInputPassword1" />
                </div>

                <Link to="/userplan">
                    <button type="submit" className="btn btn-primary" onClick={credentialHandler}>
                        Submit
                    </button>
                </Link>
            </form>
        </>
    );
};

export default Login;
