import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.jpg"
const Header = () => {
    return (
        <div>
            <nav className="navbar bg-black container-fluid">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="img-fluid" width={48} height={48} alt="" />
                    </Link>
                    <Link className="navbar-brand rounded bg-white px-2" to="/">
                        “Coding: Where Logic Becomes Magic.”
                    </Link>
                    <form className="d-flex" role="search">
                        <Link to="/signup">
                            <button className="btn btn-success" type="submit">
                                Sign Up
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;
