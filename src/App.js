import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from './Components/Alert';
import About from './Components/About';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App(){
  const [Mode, setMode] = useState('light')
  const [showAlert, setshowAlert] = useState(null);
  const [buttonColor, setbuttonColor] = useState('primary');
  const [ToggleColor, setToggleColor] = useState('primary');
  let ShowAlert = (message, type)=>{
    setshowAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {setshowAlert(null)}, 1500);
  }
  
  const ToggleMode = ()=>{
  let TextBackGround = document.getElementById('exampleFormControlTextarea1');
    if(Mode==='light'){
      setMode('dark')
      setToggleColor('light');
      setbuttonColor('outline-light');
      ShowAlert('Dark Mode Is Enabled', 'success');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgb(4, 39, 67)';
      document.getElementById('DarkModeTextItis').innerText = 'Enable LightMode';
      TextBackGround.style.color = 'white';
      TextBackGround.style.backgroundColor = 'rgb(1 54 96)';
    
      } else{  
        setToggleColor('primary');
        setMode('light')
        ShowAlert('Light Mode Is Enabled', 'success');
        setbuttonColor('primary');
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        document.getElementById('DarkModeTextItis').innerText = 'Enable DarkMode';
        TextBackGround.style.backgroundColor = 'white';
        TextBackGround.style.color = 'black';
      }
    }
  return(
    <>
    <Router>
      <Navbar name='Text-Utils' ToggleColor={ToggleColor} showAlert={showAlert} setshowAlert={setshowAlert} Mode={Mode}  ToggleMode={ToggleMode} />
      <Alert showAlert={showAlert}/>
    <Routes>
      <Route path="/About" element={<About Mode={Mode}/>}/>
      <Route path="/Text-Utility" element={
        <TextForm buttonColor={buttonColor} Text={Text} ShowAlert={ShowAlert} Mode={Mode} showAlert={showAlert} setshowAlert={setshowAlert}/>
      } />
      </Routes>
    </Router>
    </>
);
};