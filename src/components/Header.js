import React from "react";
import { Link } from "react-router-dom";


export default function Header () {

    return (
        <header>
            <h1><Link to="/">Friends Database</Link></h1>
            <nav>
                <Link to="/login">Login.</Link>
                <Link to="/friendslist">Friends List.</Link>
                <Link to="/addfriend">Add Friend.</Link>
                <a>Logout.</a>
            </nav>
        </header>
    );
}