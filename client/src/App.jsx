// Imports, lots of them
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import PatientCreate from "./views/PatientCreate.jsx";
import PatientDetails from "./views/PatientDetails.jsx";
import PatientUpdates from "./views/PatientUpdates.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PatientCreate />} />
        <Route path="/patients" element={<Home />} />
        <Route path="/patient/:id/details" element={<PatientDetails />} />
        <Route path="/patient/:id/edit" element={<PatientUpdates />} />
      </Routes>
    </>
  );
}

export default App;
