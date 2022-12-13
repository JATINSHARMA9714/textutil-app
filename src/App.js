// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';


function App() {
const [mode,setMode]=useState('DarkMode');
const changeMode=()=>{
  if(mode==='DarkMode'){
    document.body.style.backgroundColor='#252525';
    setMode('LightMode');
  }
  else{
    setMode('DarkMode');
    document.body.style.backgroundColor='white'
  }
}
  return (
    <>
    <Navbar name="Text Utility App"  modeis={mode} func={changeMode} color={mode}></Navbar>
    <TextArea heading="Enter Your Text Here" color={mode}/>
    </>
    );
}

export default App;
