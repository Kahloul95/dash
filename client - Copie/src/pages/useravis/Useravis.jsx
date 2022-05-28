
import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./useravis.css";


class Useravis extends Component {
  
  constructor(props){
    super();
    this.state = {
      id :"",
      userName:"",
      userTelNo:"",
      userEmail:"",
      date: new Date()
      
    }
    
    
    this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangeuserTelNo = this.onChangeuserTelNo.bind(this);
    this.onChangeuserEmail = this.onChangeuserEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

componentDidMount(){
  
  var url_string = window.location.href;
  console.log(url_string)

  var url = new URL(url_string);
  var c = url.searchParams.get("id");
  console.log(c);

  axios.get('http://localhost:5000/users/'+c)
        .then(res => {
          
            this.setState({
              id: c,
              userName: res.data.userName,
              userTelNo: res.data.userTelNo,
              userEmail: res.data.userEmail,
              date: new Date(res.data.date)
            })
            console.log(this.state)
        })
        .catch(function (error){
            console.log(error);
        })     
      
 
}

onChangeuserName(e) {
    this.setState({ userName: e.target.value})
}
onChangeuserTelNo(e) {
  this.setState({ userTelNo: e.target.value})
}
onChangeuserEmail(e) {
this.setState({ userEmail: e.target.value})
}
onChangeDate(date) {
this.setState({ date: date})
}

onSubmit(e) {
    e.preventDefault();

    const user = {

      userName: this.state.userName,
      userTelNo: this.state.userTelNo,
      userEmail: this.state.userEmail,
      date: this.state.date
    }

    let id = this.state.id;


      console.log(user)
      console.log(id)
 
      axios.post('http://localhost:5000/users/update/'+id, user).then(res => {
        console.log(res.data);
        window.location = "/avis";
      }, err => {
        console.log(err);
      })
      

        
}


  render(){

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Useravis</h1>
        </div>
        <div className="userContainer">
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" 
            onSubmit={this.onSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                    value={this.state.userName}
                    onChange={this.onChangeuserName}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Tel Num</label>
                  <input
                    type="text"
                    placeholder="+0000000"
                    className="userUpdateInput"
                    value={this.state.userTelNo}
                    onChange={this.onChangeuserTelNo}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    value={this.state.userEmail}
                    onChange={this.onChangeuserEmail}
                  />
                </div>
                <div className="form-group">
                      <label>Date: </label>
                      <div>
                          <DatePicker
                          selected={this.state.date}
                          onChange={this.onChangeDate}
                           />
                      </div>
                  </div>
              </div>
              <div className="form-group">
                      <input type="submit" value="UPDATE" className="btn btn-primary" />
                  </div>
            </form>
          </div>
        </div>
    );
  }
  
}

export default Useravis; 