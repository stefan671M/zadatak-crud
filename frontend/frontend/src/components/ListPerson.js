import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
  const [Person, setPerson] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deletePerson = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getPerson();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>CreatedDate</th>
              <th>City</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>

          
          <tbody>
            {users.map((person, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.createdDate}</td>
                <td>{person.city}</td>
                <td>{person.address}</td>
                <td>{person.phone}</td>
                <td>
                  <Link
                    to={`edit/${person._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePerson(person._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default UserList;