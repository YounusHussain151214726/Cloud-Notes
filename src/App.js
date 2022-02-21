import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navb from "./Components/Navb";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NoteState from "./Contextapi/NoteState";
import Alerts from "./Components/Alerts";
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "black";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navb mode={mode} toggle={toggle} />
          <Alerts alert={alert} />
          <Routes>
            <Route
              path="/home"
              element={<Home showAlert={showAlert} mode={mode} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={<Login showAlert={showAlert} mode={mode} />}
            />
            <Route
              path="/signup"
              element={<Signup showAlert={showAlert} mode={mode} />}
            />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
