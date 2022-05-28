import './concour.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../../components/ConcourCom/Navbar';
import ConcourList from '../../components/ConcourCom/ConcourList';
import CreateConcour from '../../components/ConcourCom/CreateConcour';
import EditConcour from '../../components/ConcourCom/EditConcour';
import CreateUser from '../../components/ConcourCom/CreateUser';
function concour () {
  return(
    <div className='concour'>
         <Router>
          <Navbar/>
          <br/>
          <Route exact path="/concour" component={ConcourList} />
          <Route exact path="/edit/:id" component={EditConcour} />
          <Route exact path="/create" component={CreateConcour} />
          <Route exact path="/user" component={CreateUser} />
        </Router>
    </div>
  )
}

export default concour;
