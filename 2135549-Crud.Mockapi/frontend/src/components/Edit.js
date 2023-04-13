import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Edit() {
    
    const [id, setId] = useState(0);
    const[addName, setAddName] = useState('');
    const[addEmail, setAddEmail] = useState('');
    const[addDepartment, setAddDepartment] = useState('');
    const datalist = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setAddName(localStorage.getItem("name"));
        setAddEmail(localStorage.getItem("email"));
        setAddDepartment(localStorage.getItem("department"));
      }, []);

      const handleUpdate = (e)=> {
        e.preventDefault();
        fetch('/edit/'+id, {
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


            <input type="submit" onClick={handleUpdate} id="submit"></input>
            </form>
        </>
    )

}

export default Edit;