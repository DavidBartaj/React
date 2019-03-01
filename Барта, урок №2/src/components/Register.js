import React, {Component} from 'react';



class Register extends Component {
   
    render() {
        return (
            <div>
                <form action="" className="form">
                    <p>Login</p>
                    <input type="text" placeholder="Create login"/>
                    <p>Password</p>
                    <input type="password" placeholder="Create password"/>
                    <p>Password</p>
                    <input type="password" placeholder="Repeat password"/>
                    <p>Email</p>
                    <input type="text" placeholder="Enter email"/>
                </form>
                <button className="btn btn-primary" type="submit">Create Account</button>
            </div>
        );
    }
}

export default Register
