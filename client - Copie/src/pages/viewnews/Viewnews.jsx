import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";



import "./viewnews.css";
import Position from "../Map/Position";


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { MapContainer, TileLayer,Marker,Popup, useMapEvents, Tooltip, } from 'react-leaflet';



class Displyavis extends Component {
  
  constructor(props){
    super();
    this.state = {
      id :"",
      title:"",
      type:"",
      desc:"",
      img:"",
      lat:"",
      lng:"",
      date: ""
      
    }
    
  }


  

componentDidMount(){
  
  var url_string = window.location.href;
  console.log(url_string)

  var url = new URL(url_string);
  var c = url.searchParams.get("id");
  console.log(c);

  axios.get('http://localhost:5000/news/'+c)
        .then(res => {
          
            this.setState({
              id: c,
              title: res.data.title,
              type: res.data.type,
              desc: res.data.desc,
              img: res.data.img,
              date: res.data.date,
              lat: res.data.lat,
              lng: res.data.lng
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
           <h1 className="userTitle">View News</h1>
         </div>
         <Link to="/news" >
           <button className="create">Go to back </button>
           </Link>
         <div className="userContainer">
           </div>
           <div className="userUpdate">
             <span className="userUpdateTitle">View</span>
             <div className="userUpdateItem">
                   <label> 
                     Gafsa en {this.state.date} </label>
              </div>
               <div className="userUpdateLeft">
                 <div className="userUpdateItem">
                   <label>Title : {this.state.title}</label>
                 </div>
                 <div className="userUpdateItem">
                 <img src={`http://localhost:5000/images/${this.state.img}`} alt="" className="productUploadImg" />
                 
                 </div>
                 <div className="userUpdateItem">
                   <label>Type : {this.state.type}</label>
                   
                 </div>
                 <div className="userUpdateItem">
                   <label>position :
                   <MapContainer className="mapContainer" center={[34.39520097991745,8.62758630886674]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        
        <Marker position={[this.state.lat, this.state.lng]} zoom={13}>
          <Popup>
          {this.state.title}
          </Popup>
          <Tooltip >{this.state.title}</Tooltip>
        </Marker>
      </MapContainer>
                     {this.state.lat}</label>
                 </div>
                 <div className="userUpdateItem">
                   <label>Description : {this.state.desc}</label>
                   
                 </div>
                 
               </div>
               
             
           </div>
         </div>
      
      
    );
  }
  
}

export default Displyavis; 