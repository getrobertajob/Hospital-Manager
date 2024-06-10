// Imports
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HeaderH1Text } from "../main.jsx";
import { useNavigate } from "react-router-dom";

// use state for update page
const PatientUpdate = () => {
  const [patient, setPatient] = useState({});
  const [patientErrors, setPatientErrors] = useState({});
  const { id } = useParams();
  const { setHeaderH1Text } = useContext(HeaderH1Text);
  const navigate = useNavigate();

  // use effect to setup page
  // includes change h1 text
  // and populating form by id
  useEffect(() => {
    axios
      .get(`http://localhost:8004/api/patient/${id}`)
      .then((res) => {
        console.log(res.data);
        setPatient(res.data);
        setHeaderH1Text("Update " + res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setHeaderH1Text]);

  // to handle changing is availible checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // to handle form submission
  // includes page redirect afterwards
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8004/api/patient/${id}`, patient)
      .then((res) => {
        console.log(res.data);
        navigate(`/patient/${patient._id}/details`);
      })
      .catch((error) => {
        setPatientErrors(error.response.data.errors);
      });
  };

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <label className="formGroupU">
        Age
        <p className="errorBox">{patientErrors.age?.message}</p>
        <input
          type="number"
          name="age"
          className="numInputU"
          value={patient.age || ''} 
          onChange={handleChange}
        />
      </label>
      <label className="formGroupU">
        Name
        <p className="errorBox">{patientErrors.name?.message}</p>
        <input 
          className="inputsU"
          type="text" 
          name="name" 
          value={patient.name || ''} 
          onChange={handleChange} 
        />
      </label>
      <label className="formGroupU">
        Symptoms
        <p className="errorBox">{patientErrors.symptoms?.message}</p>
        <textarea 
          className="textAreaU"
          rows="4" 
          cols="50"
          name="symptoms" 
          value={patient.symptoms || ''} 
          onChange={handleChange} 
        />
      </label>
      <input 
        className="createBtn" 
        type="submit" 
        value="Update" 
      />
    </form>
  );
};

export default PatientUpdate;
