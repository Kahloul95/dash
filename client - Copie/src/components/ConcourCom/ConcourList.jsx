import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


const Concour = props => (
    <tr>
        <td>{props.concour.username}</td>
        <td>{props.concour.description}</td>
        <td>{props.concour.duration}</td>
        <td>{props.concour.date.substring(0,10)}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/"+props.concour._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.concour._id) }}>Delete</button> | <button className="btn btn-info" >Info</button>
        </td>
    </tr>
)

class ConcourList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concour: []
        }

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/concours/')
            .then(res => {
                this.setState({ concour: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/concours/' +id)
            .then(res => console.log(res.data));

        this.setState({ concour: this.state.concour.filter(el => el._id !== id)})
    }

    exercisesList() {
        return this.state.concour.map(currentconcour   => {
            return <Concour concour={currentconcour} deleteExercise={this.deleteExercise} key={currentconcour._id} />
        })
    }

    render() { 
        return ( 
            <div className="container List" >
                <h3>la liste des concour</h3>
                <br/>
                <table className="table">
                    <thead className="" >
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default ConcourList;