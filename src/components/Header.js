import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Header () {

    return (
        <header>
            <h1><Link to="/">Friends Database</Link></h1>
            <nav>
                <Link to="/login">Login.</Link>
                <Link to="/friends">Friends List.</Link>
                <Link to="/friends/add">Add Friend.</Link>
                <Link to="/logout">Logout.</Link>
            </nav>
        </header>
    );
}