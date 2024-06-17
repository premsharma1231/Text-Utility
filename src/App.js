import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from './Components/Alert';

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
    if(Mode==='light'){
      setMode('dark')
      setToggleColor('light');
      setbuttonColor('outline-light');
      ShowAlert('Dark Mode Is Enabled', 'success');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'rgb(4, 39, 67)';
      document.getElementById('exampleFormControlTextarea1').style.color = 'white';
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor = 'rgb(1 54 96)';
      } else{  
        setToggleColor('primary');
        setMode('light')
        ShowAlert('Light Mode Is Enabled', 'success');
        setbuttonColor('primary');
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
      document.getElementById('exampleFormControlTextarea1').style.color = 'white';
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor = 'white';
      document.getElementById('exampleFormControlTextarea1').style.color = 'black';
      }
    }
  return(
    <>
        <Navbar name='Text-Utils' ToggleColor={ToggleColor} showAlert={showAlert} setshowAlert={setshowAlert} Mode={Mode}  ToggleMode={ToggleMode} />
        <Alert showAlert={showAlert}/>
        <TextForm buttonColor={buttonColor} Text={Text} ShowAlert={ShowAlert} Mode={Mode} showAlert={showAlert} setshowAlert={setshowAlert}/>
    </>
);
};