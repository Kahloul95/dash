import React, { Component } from 'react';
import axios from "axios";

class CreateUser extends Component {
    constructor(props){
        super();
        this.state = {
            userName: ""
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({ userName: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            userName: this.state.userName,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
       
        this.setState({
            userName: ''
        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;