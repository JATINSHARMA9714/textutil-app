import React,{useState} from 'react'
import '../App.css';

export default function textArea(props) {
    const changehandling=(event)=>{
        let newText=event.target.value;
        setText(newText);
    }
    const handleUpCase=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert('Converted to Upper Case','success')
    }
    const handleLoCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert('Converted to Lower Case','success')
    }
    const handleClearCase=()=>{
        setText('')
        props.showalert('Text Cleared','info')
    }
    const handleText=(word)=>{
        let newword=word.trim();
        if(newword.length===0){
            return 0
        }
        return newword.split(" ").length;
    }
    const trim=()=>{
        setText(text.trim())
        props.showalert('Extra Spaces Removed','success')
    }
    const [text, setText] = useState('');
    return (
        <div className="contain" style={{marginTop:'50px'}}>
        <div className="container">
                <div className="mb-3">
                    <h1 id="color" className='my-2' style={{color: props.color==='DarkMode'?'black':'white'}}>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.color==='DarkMode'?'black':'white'}}>Example textarea</label>
                    <textarea className="form-control"style={{backgroundColor:props.color==='DarkMode'?'white':'#252525',color:props.color==='DarkMode'?'#252525':'white'}} id="text" value={text} placeholder="enter here" onChange={changehandling} rows="8" ></textarea>
                    <br />
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.color==='DarkMode'?'dark':'light'} mx-1 my-1`} onClick={handleUpCase}>To UpperCase</button>
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.color==='DarkMode'?'dark':'light'} mx-1 my-1`} onClick={handleLoCase}>To LowerCase</button>
                    <button disabled={text.length===0}type="button" className={`btn btn-${props.color==='DarkMode'?'dark':'light'} mx-1 my-1`} onClick={trim}>Remove Extra Spaces</button>
                    <button disabled={text.length===0}type="button" className={`btn btn-${props.color==='DarkMode'?'dark':'light'} mx-1 my-1`} onClick={handleClearCase}>Clear All Text</button>
                    <h2 className="my-2" style={{color: props.color==='DarkMode'?'black':'white'}}>Letter And Word Count</h2>
                    <p style={{color: props.color==='DarkMode'?'black':'white'}}>{handleText(text)} Word {text.length} Letters</p>
                    <h2 style={{color: props.color==='DarkMode'?'black':'white'}}>Time Taken To Read</h2>
                    <p style={{color: props.color==='DarkMode'?'black':'white'}}>{0.08*handleText(text)} Minutes</p>

            </div>
            </div>
            
            </div>
    )
    }