import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import "./displyavis.css";


class Displyavis extends Component {
  
  constructor(props){
    super();
    this.state = {
      id :"",
      userName:"",
      userTelNo:"",
      userEmail:"",
      date: ""
      
    }
    
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
              date: res.data.date
            })
            console.log(this.state)
        })
        .catch(function (error){
            console.log(error);
        })     
      
 
}


  render(){
      
    
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Dispaly Useravis</h1>
        </div>
        <div className="userContainer">
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Display</span>
            <Link to="/avis" >
          <button className="create">Go to back </button>
          </Link>
            <form className="userUpdateForm" 
            >
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <span type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput">
                        {this.state.userName}
                    </span>
                  
                </div>
                <div className="userUpdateItem">
                  <label>Tel Num</label>
                  <span type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput">
                        {this.state.userTelNo}
                    </span>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <span type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput">
                        {this.state.userEmail}
                    </span>
                </div>
                <div className="userUpdateItem">
                  <label>date</label>
                  <span type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput">
                        {this.state.date}
                    </span>
                </div>
                    
              </div>
              
            </form>
          </div>
        </div>
    );
  }
  
}

export default Displyavis; 