import './createmos.css'
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';

class Createmos extends Component {

  constructor(props){
    super();
    this.state = {
      userName: "",
      userTelNo: "",
      userEmail: "",
      password: "",
      phone: "",
      address: "",
      date: new Date(),
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeuserTelNo = this.onChangeuserTelNo.bind(this);
    this.onChangeuserEmail = this.onChangeuserEmail.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeUsername(e) {
    this.setState({ userName: e.target.value})
  }
  onChangeuserTelNo(e) {
    this.setState({ userTelNo: e.target.value})
  }
  onChangeuserEmail(e) {
    this.setState({ userEmail: e.target.value})
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value})
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value})
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value})
  }
  onChangedate(date) {
    this.setState({date: date})
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
        userName: this.state.userName,
        userTelNo: this.state.userTelNo,
        userEmail: this.state.userEmail,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address,
        date: this.state.date
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        window.location = "/avis";
}
render() {
  return (
    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form onSubmit={this.onSubmit} >
      <div className="newUserItem">
        <label>Username</label>
        <input type="text" required
        placeholder="john"
        value={this.state.userName}
        onChange={this.onChangeUsername} />
      </div>
      <div className="newUserItem">
        <label>Num tlf</label>
        <input type="text" placeholder="Num tlf"
        value={this.state.userTelNo}
        onChange={this.onChangeuserTelNo} />
      </div>
      <div className="newUserItem">
        <label>Email</label>
        <input type="email" placeholder="john@gmail.com" 
        value={this.state.userEmail}
        onChange={this.onChangeuserEmail}/>
      </div>
       <div className="form-group">
           <label>Date: </label>
              <div>
                 <DatePicker
                 selected={this.state.date}
                  onChange={this.onChangedate}
                  />
              </div>
         </div>
      
      <button className="newUserButton">Create</button>
    </form>
  </div>
  );
}
}
export default Createmos;
