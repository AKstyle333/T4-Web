import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar bg-black container-fluid">
                <div class="container">
                    <Link class="navbar-brand rounded rounded-circle bg-white p-2" to="/">
                        Web
                    </Link>
                    <Link class="navbar-brand rounded bg-white px-2" to="/">
                        “Coding: Where Logic Becomes Magic.”
                    </Link>
                    <form class="d-flex" role="search">
                        <button class="btn btn-success" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;
