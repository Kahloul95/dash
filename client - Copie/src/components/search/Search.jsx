import "./search.css";
import React from 'react';
import { useState } from 'react';

import { Search } from "@material-ui/icons";

export default function Searchs({onSearch}) {
  const [search, setSearch] = useState("");

 /* const InputSearchValue = (e)=> {
    setSearchValue(e.target.value);
  }

  const ClearInputFeild = () =>{
    setSearchValue('');
  }*/
  const onInputChange = (value)=>{
    setSearch(value);
    onSearch(value);
  }
  return (
    <div className="search_wrap search_wrap_3">
      <div className="search_box">
        <input type="text"
         className='input'
          placeholder='search...'
          value={search}
          onChange={(e)=> onInputChange(e.target.value)}
        />
        
        <div className='btn btn_common'>
          <i className='fas fa-search'>
            <Search/>
            </i>
        </div>
      </div>
    </div>
  );
}
