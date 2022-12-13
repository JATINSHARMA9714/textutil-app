// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';


function App() {
const [mode,setMode]=useState('DarkMode');
const [alert,setAlert]=useState(null);
const showText=(message,type)=>{
setAlert({
  message:message,
  type:type
});
setTimeout(() => {
  setAlert(null);
}, 1500);
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
  return (
    <>
    <Navbar name="Text Utility App"  modeis={mode} func={changeMode} color={mode}></Navbar>
    <Alert message={alert} alert={alert}/>
    <TextArea heading="Enter Your Text Here" color={mode}  showalert={showText}/>
    </>
    );
}

export default App;
