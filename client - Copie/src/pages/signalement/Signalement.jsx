import "./signalement.css";

import {useEffect, useState} from 'react';

function Signalement() {
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

 

   
  return (
    <>
     <div className="signalement">
       <div className="col-sm-12">
         <h5 className="mt-4 mb-4 fw-bold">Output {ID}</h5>
           
             <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label className="mb-2">Country</label>
                 <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
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
               <select name="state" className="form-control">
                   <option>--Select State--</option>
                   {
                     stetes.map( (st,rest )=>(                    
                      <option key={rest} value={st._id} > {st.municipality}</option>
                     ))
                     }
                 </select>
               </div>

               <div className="form-group col-md-2 mt-4">              
               <button className="btn btn-success mt-2" >Submit</button>               
               </div>
            </div>
               
       </div>
     </div>
    </>
  );
}

export default Signalement