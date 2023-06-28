import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import React,{useState} from 'react';
import Alert from './component/Alert';
import About from './component/About';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
  const App=()=>{
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(Message,state)=>{
    setAlert({
      msg:Message,
      state:state
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
  }
  const togglemode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#012743";
      showAlert("Dark mood enbaled","sucess");
      //setIntervl(()=>{
        //decument.title="dafasdf";
      //  },1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mood enbaled","sucess");
    }
  }
  render(
    <BrowserRouter>
            <NavBar title="Online Text Modifier"home="Home"mode={mode} togglemode={togglemode} About="About"/> 
            <Alert alert={alert}/>
            <div className='container'>
      <Routes>
            
          <Route path="/about" element={<About />}/>
          
          <Route path="/" element={<TextForm heading ="Enter the text for analyse"showAlert={showAlert} mode={mode}title="Analysis"/>}/> 
            
        
             
           </Routes>
           </div>
    </BrowserRouter>,
    document.getElementById("root")
  );
  }
export default App;
