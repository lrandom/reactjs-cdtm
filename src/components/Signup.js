import React from "react";
import './Signup.css';
import Axios from "axios";

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

    componentDidMount() {
        Axios.get('http://localhost/demo_axios/addUser.php').then(() => {
            alert("User added successfully");
        });
    }

    doSignup(event) {
        event.preventDefault();
        Axios.post('http://localhost/demo_axios/addUser.php', {
            username: this.state.username,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            email: this.state.email
        })
            .then(res => {
                alert("Signup Successful");
            })
            .catch(err => {
                alert("Signup Failed");
            })
    }

    render() {
        return (
            <div className="signup">
                <h1>Signup</h1>
                <form onSubmit={(event => {
                    this.doSignup(event);
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
