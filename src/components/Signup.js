import React from "react";
import './Signup.css';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: ''
        }
    }

    render() {
        return (
            <div className="signup">
                <h1>Signup</h1>
                <form onSubmit={(event => {
                    event.preventDefault()
                })}>

                    <input type="text" placeholder="Username" onChange={(event) => {
                        this.setState({username: event.target.value})
                    }}/>

                    <input type="password" placeholder="Password"
                           onChange={(event) => {
                               this.setState({password: event.target.value})
                           }}
                    />
                    <input type="password" placeholder="Confirm Password"
                           onChange={(event) => {
                               this.setState({confirm_password: event.target.value})
                           }}
                    />
                    <input type="email" placeholder="Email"
                           onChange={(event) => {
                               this.setState({email: event.target.value})
                           }}
                    />
                    <button>Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;
