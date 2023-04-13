import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';



function List() {

    const [data, setData] = useState([{}]);
    const datalist = useNavigate();

    const setToLocalStorage = (id, name, email, department) => {
      localStorage.setItem("id", id);
      localStorage.setItem("name",name);
      localStorage.setItem("email", email);
      localStorage.setItem("department", department);
    };

    function handleRemove(id){
      fetch('/delete/'+id, {
        method: 'POST',
        body: JSON.stringify({
          id : id
        })
        }).then(response => response.json())
        .then(data => console.log(data))
        .then(() => {
          datalist("/");
        });
        window.location.reload();
   }

    useEffect(() => {
        fetch("/employees").then(
          res => res.json()
        ).then(
          data => {
            setData(data)
            console.log(data)
          }
        )
      }, [])

    return(
        <>
        <h2 id="h2">Employee Database</h2>
        <div>
        <Link to="/create">
          <button className="btn btn-primary" id="C">Create</button>
        </Link>
        </div>

        <div>
      <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
      {data.map((eachData) => {
          return (
            <>
            <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.department}</td>
                  <td>
                  <Link to="/update">
                      <button className="btn-warning" id="edit" onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.department
                          )
                        }>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn-danger" id="delete" onClick={() => handleRemove(eachData.id)}>Delete</button>
                  </td>

                  </tr>
            </tbody>
            </>
          )
      })}
      </table>
      
      
    </div>
        </>

    )
}

export default List;