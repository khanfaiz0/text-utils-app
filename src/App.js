
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode,setmode] = useState('light');
  const [alert, setalert] = useState(null);


  const showalert = (Message,type)=>{
      setalert({
        msg : Message,
        type : type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);  
  }


  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor ="#1b1c38"
      document.title="Textutils-dark";
      showalert("Darkmode has been enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      document.title="Textutils-light";
      showalert("Darkmode has been disabled","success");
    }
  }

  


  return (
    <>
    <Navbar title="faizapp" about="About Us" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter your text below to analyze." showalert={showalert} mode={mode} />

    </div>
    
    </>
  );
}

export default App;
