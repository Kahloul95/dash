
import React, { useState, useEffect } from "react";
import axios from "axios";
import Position from '../Map/Position';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MapContainer, TileLayer,Marker,Popup, useMapEvents, Tooltip, } from 'react-leaflet';

import "./updatenews.css";


export default function Updatenews () {

  const initialState = {
     id :"",
      title:"",
      type:"",
      desc:"",
      img:"",lat:"",lng:"",
    
      date: new Date()
  }

  const [news, setNews] = useState(initialState)

  const [data, setMapData] = useState({}); // Data from child
  
  const handleChange = e => {
    setNews({
      ...news, [e.target.name] : e.target.value

    });
    console.log(news)
    
  }   
  var url_string = window.location.href;
    console.log(url_string)
  
    var url = new URL(url_string);
    var x = url.searchParams.get("id");
    console.log(x);
    
    
  
  
useEffect ( () =>{
  const getdata = async ()=> {
  
  axios.get(`http://localhost:5000/news/${x}`)
        .then(res => {
          
          setNews(res.data)
           
            console.log(res.data)
        })
        .catch(function (error){
            console.log(error);
        }) 
      }
      getdata()
},[])


const childToParents = (childdata) => {
  setMapData(childdata);
  console.log(childdata);
  
  console.log(data);
}

const onSubmit = e => {
    e.preventDefault();
    
    news.lat = data.lat;
    news.lng = data.lng;
    console.log(news)
    
  
 
      axios.post(`http://localhost:5000/news/update/${x}`, news)
      .then(res => {
        
        console.log(res);
        window.location = "/news";
      }, err => {
        console.log(err);
      })
      
     
}



    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit News</h1>
        </div>
        <div className="userContainer">
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" 
            onSubmit={onSubmit}
            >
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="title"
                    className="userUpdateInput"
                    value={news.title}
                    name='title'
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>type</label>
                  <input
                    type="text"
                    placeholder="type"
                    className="userUpdateInput"
                    value={news.type}
                    name='type'
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Description</label>
                  <textarea type="text"
                    placeholder="desc.."
                   // className="userUpdateInput"
                    value={news.desc}
                    name='desc'
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div className='mpss'>
                <Position childToParent={childToParents}  />
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
  


