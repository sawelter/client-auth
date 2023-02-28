import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
 
const initialFriend = {
    name: '',
    age: '',
    email: '',
    id: Date.now()
}

class AddFriend extends React.Component {
    state = {
        friend: initialFriend
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token);
        axios.post('http://localhost:9000/api/friends', this.state.friend, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err))

        this.setState({
            friend: initialFriend
        })
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            } 
        })
    }

   render() {
    return (
        <div>
            {!localStorage.getItem('token') && <h3>You are not logged in.</h3>}
            {localStorage.getItem('token') && 
            <div>
                <h2>Add Friend</h2>
    
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <label>Friend Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <label>Friend Age</label>
                    <input 
                        type="text"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <label>Friend Email</label>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                </div>}
        </div>
    )
   } 
    
}


export default AddFriend;