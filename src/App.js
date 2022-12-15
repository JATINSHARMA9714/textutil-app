// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
const [mode,setMode]=useState('DarkMode');
const [alert,setAlert]=useState(null);
const [activity1,setactivity1]=useState('Active')
const [activity2,setactivity2]=useState('');
const showText=(message,type)=>{
setAlert({
  message:message,
  type:type
});
setTimeout(() => {
  setAlert(null);
}, 300);
}
const changeMode=()=>{
  if(mode==='DarkMode'){
    document.body.style.backgroundColor='#252525';
    setMode('LightMode');
    showText('Changed to Dark Mode','success')
    
  }
  else{
    setMode('DarkMode');
    document.body.style.backgroundColor='white'
    showText('Changed to Light Mode','success')
  }
}
const changeActivity=()=>{
  if(activity1==='active'){
    setactivity1('');
    setactivity2('active');
  }
  else{
    setactivity1('active')
    setactivity2('')
  }
}
  return (
    <>
    <Router>
    <Navbar name="Text Utility App"  modeis={mode} func={changeMode} color={mode}/>
    <Alert message={alert} alert={alert}/>
    {/* <TextArea heading="Enter Your Text Here" color={mode}  showalert={showText}/> */}
    {/* <About/> */}
    <Routes>
      <Route exact path="/" element={<TextArea heading="Enter Your Text Here" color={mode} activity1={activity1} activity2={activity2}  function={changeActivity}showalert={showText}/>} />
      <Route path="/about" element={<About color={mode}/>} />
    </Routes>
    </Router>
    </>
    );
}

export default App;
