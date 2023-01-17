import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [alert, setAlert] = useState(null);
  // setTimeout(() => {
  //   document.title = "Welcome! MaNa CaseMaster";
  // }, 2000);
  document.title = "MaNa CaseMaster - Home";
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("primary");
  const toggleDarkMode = () => {
    if (mode === "primary") {
      setMode("black");
      document.body.style.backgroundColor = "#10213a";
      document.body.style.color = "white";
      showAlert("success", "black mode has been enabled");
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Light mode has been enabled");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          siteName={"MaNa CaseMaster"}
          mode={mode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading={"MaNa CaseMaster: Effortlessly Convert Text Cases"}
              />
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
