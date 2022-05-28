import './newnews.css'
import { useState, useEffect} from 'react';
import Position from '../Map/Position';
import DatePicker from "react-datepicker";
import axios from 'axios';
//import React, { Component } from 'react'


export default function Newnews() {

  const [newNews, setNewNews] = useState (
    {
      title:'',
      type:'',
      img:'',
      desc:'',
      gender:'',
      date:'',
      country:'',
      munici:''
    }
  );

  // https://www.freecodecamp.org/news/pass-data-between-components-in-react/
  const [data, setMapData] = useState({}); // Data from child

  const [country, setCountry]= useState([]);
  const [ID, setID]= useState('');
  const [stetes, setSat]= useState([]);

  

  useEffect( ()=>{
   const getcountry= async ()=>{
     const req= await fetch("http://localhost:5000/country");
     const getcon= await req.json();
     console.log(getcon);
     setCountry(await getcon);
     
   }
   getcountry();

  },[ID]);

  

  const handlecountry=(event)=>{
    const getID= event.target.value;
    setID(getID);
    console.log(getID)
    event.preventDefault();

    getstate(getID);
    setNewNews({...newNews, country: event.target.value});
    
  }
  
  const getstate= async (id)=>{

    console.log(id);
   // const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid }`);
    const resstate= await fetch(`http://localhost:5000/municipality/states/${id}`)
  .then(res => res.json())
  .then(data => 
    
    {console.log(data)
      setSat(data);
    }
  )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newNews.title);
    formData.append('type', newNews.type);
    formData.append('img', newNews.img);
    formData.append('desc', newNews.desc);
    formData.append('date', newNews.date);
    formData.append('gender',newNews.gender)
    formData.append('country',newNews.country)
    formData.append('munici',newNews.munici)

    formData.append("lat", data.lat);
    formData.append("lng", data.lng);

    

    axios.post('http://localhost:5000/news/add', formData)
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            console.log(err);
         });

         window.location = "/news";
         
}

const handleChange = (e) => {
  setNewNews({...newNews, [e.target.name]: e.target.value});
  console.log(newNews)
}

const handlePhoto = (e) => {
  setNewNews({...newNews, img: e.target.files[0]});
}

// Data from child
const childToParent = (childdata) => {
  console.log(childdata);
  setMapData(childdata);
  console.log(data);
}

  return (
    <div className="newUser">
    <h1 className="newUserTitle">New News</h1>
    <form  onSubmit={handleSubmit} encType="multipart/form-data">
    
    <div className="addProductItem">
          <label htmlFor='file'>Image</label>
          <input
            type="file"
            accept='.png, .jpg, .jpeg .pdf'
            name='img'
            onChange={handlePhoto} 
            />
        </div>
       
      <div className="newUserItem">
        <label hatmlFor='title'>Titre</label>
        <input type="text" 
        name="title"
        placeholder="Titre"
        value={newNews.title}
        onChange={handleChange} 
        />
      </div>
      <div className="newUserItem">
        <label >Type</label>
        <input type="text" 
        name="type"
        placeholder="Type"
        value={newNews.type}
        onChange={handleChange} 
        />
      </div>
      <div className="newUserItem">
        <label>Desc</label>
       <textarea  type="text" name="desc" placeholder="article"
       value={newNews.desc}
       onChange={handleChange} 
       ></textarea>
      </div>
     
       <div className="form-group">
           <label>Date: </label>
              <div>
                
                  <input 
                type="date"
                name="date"
                value={newNews.date}
                onChange={handleChange}
            />
              </div>
        </div>
         <label>
            Gender:
            <div>
              <input  type='radio' value='male' name='gender' onChange = {handleChange} /> Male
              <input  type='radio' value='femaile' name='gender' onChange = {handleChange} /> Femaile
              <input  type='radio' value='other' name='gender' onChange = {handleChange} /> Other
            </div>
          </label>
          <br/>
          
         {/* <div>
          <label>
            Gender:
            <div>
              <input  type='checkbox' value='male' name='box' onChange = {handleChange} /> Male
              <input  type='checkbox' value='femaile' name='box' onChange = {handleChange} /> Femaile
              <input  type='checkbox' value='other' name='box' onChange = {handleChange} /> Other
            </div>
          </label>
          </div>
  */}
          <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label className="mb-2">Country</label>
                 <select name="country" className="form-control" onChange={handlecountry} >
                   <option>--Select Country--</option>
                   {
                     country.map( (countryget, index)=>(
                   <option key={index} value={countryget.ID}> {countryget.country}</option>
                     ))
                }
                 
                 </select>
               </div>
               <div className="form-group col-md-4">
               <label className="mb-2">State</label>
               <select name="munici" className="form-control" onChange={handleChange}>
                   <option>--Select State--</option>
                   {
                     stetes.map( (st,rest )=>(                    
                      <option key={rest} value={st.municipality} > {st.municipality}</option>
                     ))
                     }
                 </select>
                
        </div>
        </div>
         
       <div className='mpss'>
         <Position childToParent={childToParent} />
       </div>


      <button className="newUserButton">Create</button>
    </form>
  </div>
  );
}


  


  
        

