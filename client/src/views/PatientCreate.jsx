// Imports
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HeaderH1Text } from "../main.jsx";
import { useNavigate } from "react-router-dom";

// use state for create page
const PatientCreate = () => {
  const [patient, setPatient] = useState({});
  const [patientErrors, setPatientErrors] = useState({});
  const { setHeaderH1Text } = useContext(HeaderH1Text);
  const navigate = useNavigate();

  // use effect to setup page 
  // includes change h1 text
  useEffect(() => {
    setHeaderH1Text("Admit Patient");
  }, [setHeaderH1Text]);

  // to handle changing input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  // to handle form submission
  // includes page redirect afterwards
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8004/api/patients", patient)
      .then((res) => {
        console.log(res.data);
        navigate("/patients");
      })
      .catch((error) => {
        setPatientErrors(error.response.data.errors);
      });
  };

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <label className="formGroupC">
        Age
        <p className="errorBox">{patientErrors.age?.message}</p>
        <input
          type="number"
          name="age"
          className="numInputC"
          value={patient.age || ''} 
          onChange={handleChange}
        />
      </label>
      <label className="formGroupC">
        Name
        <p className="errorBox">{patientErrors.name?.message}</p>
        <input 
          className="inputsC"
          type="text" 
          name="name" 
          value={patient.name || ''} 
          onChange={handleChange} 
        />
      </label>
      <label className="formGroupC">
        Symptoms
        <p className="errorBox">{patientErrors.symptoms?.message}</p>
        <textarea 
          className="textAreaC"
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
        value="Admit" 
      />
    </form>
  );
};

export default PatientCreate;
