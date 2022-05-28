import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark navbar-expand-lg static-top">
                <Link to="/concour" className="navbar-brand">la liste</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/concour" className="nav-link">Concour</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Concour</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Navbar;