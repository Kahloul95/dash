import "./gestion.css";

import React, { useState, useEffect } from "react";

const data = {
  countries: [
    {
      name: "Gafsa",
      states: [
        {
          name: "gafsa-sud",
          cities: ["Zaroug", "esorour", "mwala"]
        },
        {
          name: "Gafsa-Nord",
          cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
        }
      ]
    },
    { name: "Toeur", states: [{ name: "tozeur-sud", cities: ["nafta","dgech"] },{ name: "tozeur-Nor", cities: ["hama","mata"] }] },

    { name: "tatawin", states: [{ name: "tatawin-sud", cities: ["borma", "bir ahmar"] }, { name: "tatawin-Nor", cities: ["chhida", "bir agba"] }] },
   
   
  ]
};

function Country() {
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
  (s) => s.name === selectedState );

   
  return (
    <div id="container" className="gestion">
      <h1>Adresse </h1>

      <div>
        <label>Country</label>
        <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {data.countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>State</label>
        <select
          placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>--Choose State--</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>City</label>
        <select
          placeholder="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>--Choose City--</option>
          {availableCities?.cities.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group col-md-2 mt-4">              
               <button className="btn btn-success mt-2" >Submit</button>               
       </div>
    </div>
  );
}
export default Country;