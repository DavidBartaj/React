import React, {Component} from 'react';


class Login extends Component {
    
    render() {
        return (
            <div>
                <form action="" className="form">
                    <p>Login</p>
                    <input type="text" placeholder="Enter your login"/>
                    <p>Password</p>
                    <input type="password" placeholder="Enter your password"/>

                </form>
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        );
    }
}

export default Login
