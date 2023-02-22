import React from "react";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            credentials: {
                ...this.credentials,
                [e.target.name]: e.target.value
            } 
        })
    }

   render() {
    return (
        <div>
            <h2>Login</h2>
            <form id="login-form">
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
   } 
    
}

export default Login;