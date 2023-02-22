import React from "react";
import { addFriend } from '../actions/friendsActions.js'
import { connect } from "react-redux";
 

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            email: '',
            id: Date.now()
        }
    }

    handleSubmit = (e) => {
        console.log(this.state.friend.name);
        e.preventDefault();
        this.props.addFriend(this.state.friend);
    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`)
        console.log(this.state.friend)
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
            <h2>Add Friend</h2>
            <form id="login-form" onSubmit={this.handleSubmit}>
                <label>Friend Name</label>
                <input 
                    type="text"
                    name="name"
                    value={this.state.friend.name}
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
        </div>
    )
   } 
    
}


export default connect(null, {addFriend})(AddFriend);