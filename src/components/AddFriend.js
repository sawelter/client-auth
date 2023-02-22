import React from "react";

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            email: '',
            id: ''
        }
    }

    handleChange = e => {
        console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            friend: {
                ...this.friend,
                [e.target.name]: e.target.value
            } 
        })
    }

   render() {
    return (
        <div>
            <h2>Add Friend</h2>
            <form id="login-form">
                <label>Friend Name</label>
                <input 
                    type="text"
                    name="friend-name"
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                />
                <label>Friend Email</label>
                <input 
                    type="text"
                    name="friend-email"
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
   } 
    
}

export default AddFriend;