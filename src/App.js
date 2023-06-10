// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {

  setInterval(() => {

    document.title = "Install text utils now";

  }, 1000);

  setInterval(() => {

    document.title = "Hey you !";

  }, 1500);


  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const removeBodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyclasses();
    // console.log("toggle");
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(47 47 46)';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled", "danger");
    }

  }



  return (
    <>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About  mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
