import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Logout = () => {

    const navigate = useNavigate();
        

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.post("http://localhost:9000/api/friends", {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
                localStorage.removeItem("token");
            })
            .catch(err => console.error(err))
        navigate("/");
    }, [])

    return (
        <></>
    )
}

export default Logout;