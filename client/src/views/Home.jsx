// Imports
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HeaderH1Text } from "../main.jsx";
import { Link } from "react-router-dom";

// use state for home page
const Home = () => {
  const [patients, setPatients] = useState([]);
  const { setHeaderH1Text } = useContext(HeaderH1Text);

  // to query all patients when page first loads and set header text
  useEffect(() => {
    axios
      .get("http://localhost:8004/api/patients")
      .then((res) => {
        console.log(res.data);
        setPatients(res.data);
        setHeaderH1Text("Hospital Manager");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setHeaderH1Text]);

  return (
    <div className="homeContainer">
      {patients.map((patient) => (
        <div key={patient._id} className="patientBox">
          <h3>
            <Link to={`/patient/${patient._id}/details`}>
              {patient.name}
            </Link>
          </h3>
          <Link className="editBtn" to={`/patient/${patient._id}/edit`}>
              edit
          </Link>
          <span>Age: {patient.age}</span>
          <p> {patient.symptoms}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
