import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

 
const AddPerson = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [City, setCity] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.Name);
    setEmail(response.data.Surname);
    setGender(response.data.CreatedDate);
    setGender(response.data.City);
    setGender(response.data.Address);
    setGender(response.data.Phone);

  };

  
 
  const updatePerson = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/person/${id}`, {
       
Name,
Surname,
CreatedDate,
City,
Address,
Phone
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={savePerson}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Surname</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="surname"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">CreateDate</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                placeholder="create Date"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="city"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                placeholder="adress"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
              />
            </div>
          </div>
          </form>     
        </select>
          
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
    
      </div>
      
   
  );
};
 
export default EditUser;