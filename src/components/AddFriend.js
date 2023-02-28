import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
 
const initialFriend = {
    name: '',
    age: '',
    email: '',
    id: Date.now()
}

const AddFriend = () => {
    if(!localStorage.getItem("token")) {
        return <Navigate to="/login" />
    }

    const [friend, setFriend] = useState(initialFriend);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        axios.post('http://localhost:9000/api/friends', friend, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                navigate("/friends")
            })
            .catch(err => console.error(err))

        setFriend(initialFriend);
        navigate("/friends")
    }

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Add Friend</h2>

            <form id="login-form" onSubmit={handleSubmit}>
                <label>Friend Name</label>
                <input 
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                />
                <label>Friend Age</label>
                <input 
                    type="text"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                />
                <label>Friend Email</label>
                <input 
                    type="text"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
    
}


export default AddFriend;