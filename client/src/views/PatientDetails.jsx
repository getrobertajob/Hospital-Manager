// Imports
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { HeaderH1Text } from "../main.jsx";
import { useNavigate } from "react-router-dom";

// use state for details page
const PatientDetails = () => {
  const [patient, setPatient] = useState({});
  const { id } = useParams();
  const { setHeaderH1Text } = useContext(HeaderH1Text);
  const navigate = useNavigate();

  // to get form data for specific patient
  // includes change to h1 text
  useEffect(() => {
    axios
      .get(`http://localhost:8004/api/patient/${id}`)
      .then((res) => {
        console.log(res.data);
        setPatient(res.data);
        setHeaderH1Text(res.data.name + " Details");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setHeaderH1Text]);

  // to handle patient deletion
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8004/api/patient/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="detailsContainer">
      <p>{patient.age} years of age.</p>
      <label className="symptomLbl">
        Symptoms
      </label>
      <p>{patient.symptoms}</p>
      <button className="deleteBtn" onClick={handleDelete}>
        Discharge Patient
      </button>
    </div>
  );
};

export default PatientDetails;
