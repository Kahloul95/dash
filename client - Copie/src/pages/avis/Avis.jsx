import './avis.css'
import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Visibility, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";





import ReactDOM from 'react-dom';
export default function App() {


const [rowData,setRowData] = useState([]);

const handleClickSignIn=() =>{
  console.log("come handle click fun");
  this.props.history.push( {pathname: "/useravis",
  state: { employee:"Steven" }});

}

const handleDelete = (_id) => {
  axios.delete('http://localhost:5000/users/' +_id)
  .then(res => console.log(res.data));
    setRowData(rowData.filter((item) => item._id !== _id));
  };
  
  
useEffect(() => {
const axios = require('axios').default;
axios
.get('http://localhost:5000/users') // node.js MongoDB mongoose users REST service
.then((response) => {

setRowData(response.data);
response.data.forEach(user => {
});
});
}, []);
// MATERIAL DATAGRID
const columns = [
{ field: '_id', headerName: '_id', width: 180 },
{ field: 'id', headerName: 'ID', width: 100 },
{ field: 'userName', headerName: 'User Name', width: 150 },
{ field: 'userTelNo', headerName: 'Tel No', width: 150 },
{ field: 'userEmail', headerName: 'EMail', width: 150 },
//{ field: 'userRole', headerName: 'Role', width: 150 },
{ field: 'date', headerName: 'Date Saved', width: 150 },
{ field: "action", headerName: "Action", width: 230,
      renderCell: (params) => {
        return (
          <>
          
           <Link to={"/useravis?id="+params.id}>
           <Edit
              className="edit"
              onClick={() => handleClickSignIn(params.row._id)}
            />
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
            
            <Link to={"/displyavis?id="+params.id}>
            <Visibility
              className=".."
              onClick={() => handleClickSignIn(params.row._id)}
            />
            </Link>
          </>
        );
      },
    },
];
return(
<div className='avis' style={{ height: 700, width: '100%' }}>

<Link to="/createmos" >
          <button className="create">Create User </button>
 </Link>

<div style={{ display: 'flex', height: '75%' }}>
<div style={{ flexGrow: 1 }}>
<DataGrid 
columns={columns}
rows={rowData}

getRowId ={(row) => row._id}
getRowID ={(row)=> row.id}
id= 'Id'
pageSize={7}
checkboxSelection
/>

</div>
</div>
</div>
);
}