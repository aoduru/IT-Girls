import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import navicon from "../../images/navicon.svg";
import "./navbar.css";


function Navbar() {
    return (
        <>
            <nav>
                <Link className="nav-brand" to={ROUTES.HOME}>
                    <img src={navicon} alt="navicon" />
                    COVID-19
                </Link>

                <div className="nav-links-div">
                    <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
                    <Link className="nav-link" to={ROUTES.HISTORY}>History</Link>
                    <Link className="nav-link" to={ROUTES.ELIGIBILITY}>Eligibility</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;