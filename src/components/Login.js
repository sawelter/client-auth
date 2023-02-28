import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const initialCredentials = {
    username: '',
    password: ''
}



const Login = (props) => {
    const [credentials, setCredentials] = useState(initialCredentials);   
    let navigate = useNavigate(); 

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(credentials);
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                navigate("/friends");
            })
            .catch(err => console.log(err));
    }



    return (
        <div>
            <h2>Login</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )    
}


export default Login;

// class Login extends React.Component {
//     state = {
//         credentials: {
//             username: '',
//             password: ''
//         }
//     }
    

//     handleChange = e => {
//         this.setState({
//             credentials: {
//                 ...this.state.credentials,
//                 [e.target.name]: e.target.value
//             } 
//         });
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         console.log(this.state.credentials);
//         axios.post('http://localhost:9000/api/login', this.state.credentials)
//             .then(res => {
//                 console.log(res);
//                 localStorage.setItem("token", res.data.token);
                
//             })
//             .catch(err => console.log(err));
//     }



//    render() {
//     return (
//         <div>
//             <h2>Login</h2>
//             <form id="login-form" onSubmit={this.handleSubmit}>
//                 <label>Username</label>
//                 <input 
//                     type="text"
//                     name="username"
//                     value={this.state.credentials.username}
//                     onChange={this.handleChange}
//                 />
//                 <label>Password</label>
//                 <input 
//                     type="password"
//                     name="password"
//                     value={this.state.credentials.password}
//                     onChange={this.handleChange}
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
//    } 
    
// }


// export default Login;