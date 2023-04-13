import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = ()=> {


    const[addName, setAddName] = useState('');
    const[addEmail, setAddEmail] = useState('');
    const[addDepartment, setAddDepartment] = useState('');

    const datalist = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        fetch('/create', {
            method: 'POST',
            body: JSON.stringify({
                name:addName,
                email:addEmail,
                department:addDepartment,
            }),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(message => console.log(message))
          .then(() => {
            datalist("/");
          });
    }
    
    return(
        <>
        <h1 id="h1">Registration Page</h1>
            <form id="form">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type ="text" value={addName} onChange={(e) => setAddName(e.target.value)}></input>
            </div>


            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type ="email" value={addEmail} onChange={(e) => setAddEmail(e.target.value)}></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Department</label>
                <input type ="text" value={addDepartment} onChange={(e) => setAddDepartment(e.target.value)}></input>
            </div>

            <input type="submit" onClick={handleSubmit} id="submit"></input>
            </form>
        </>
    )
}