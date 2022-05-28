
import React from "react";
import './addAvis.css'

const AddAvis = () =>{
    return (
        <div className="addavis">
            <form>
            <div className="mb-3">
            <input type="text"
            className="form-control formcontrol-lg"
            placeholder="Entrer your Name"
            name="name"/>
            </div>
        <div class="mb-3">
        <input type="text"
            className="form-control formcontrol-lg"
            placeholder="Entrer your username"
            name="username"/>
        </div>
        <div class="mb-3">
        <input type="email"
            className="form-control formcontrol-lg"
            placeholder="Entrer your email"
            name="email"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddAvis;