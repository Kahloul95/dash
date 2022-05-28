import './news.css'
import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Visibility, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";


import Searchs from "../../components/search/Search";




import ReactDOM from 'react-dom';
export default function App() {


const [rowData,setRowData] = useState([]);

const [search, setSearch] = useState("");

const handleClicIn=() =>{
  console.log("come click fun");
  this.props.history.push( {pathname: "/updatenews",
  state: { employee:"Sami" }});
console.log(handleClicIn)
}




const handleDelete = (_id) => {
  axios.delete('http://localhost:5000/news/' +_id)
  .then(res => console.log(res.data));
    setRowData(rowData.filter((item) => item._id !== _id));
  };
 
  
useEffect(() => {
const axios = require('axios').default;
axios
.get('http://localhost:5000/news') // node.js MongoDB mongoose users REST service
.then((response) => {

setRowData(response.data);
response.data.forEach(news => {
});
});
}, []);


// MATERIAL DATAGRID
const columns = [
{ field: '_id', headerName: '_id', width: 180 },
//{ field: 'img', headerName: 'Image', width: 150 },
{ field: 'title', headerName: 'Title', width: 150 },
{ field: 'type', headerName: 'Type', width: 150 },
//{ field: 'desc', headerName: 'Desc', width: 150 },
//{ field: 'userRole', headerName: 'Role', width: 150 },
{ field: 'date', headerName: 'Date', width: 150 },
{ field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
          
           <Link to={"/updatenews?id="+params.id}>
           <Edit
              className="edit"
              onClick={() => handleClicIn(params.row._id)}
            />
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
            
            
          <Link to={"/viewnews?id="+params.id}>
              <Visibility
              />
            </Link>
          </>
        );
      },
    },
];
return(
<div className='avis' style={{ height: 750, width: 70 }}>
      
<Link to="/newNews" >
          <button className="create">New News </button>
 </Link>
 
<div style={{ display: 'flex', height: '75%' }}>
<div style={{ flexGrow: 2 }}>
<DataGrid className='grid'
columns={columns}
rows={rowData}

getRowId ={(row) => row._id}
getRowID ={(row)=> row.id}

id= 'Id'
pageSize={5}
checkboxSelection
/>

</div>
</div>
</div>
);
}