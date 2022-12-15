import React from 'react'
import '../App.css';
export default function Alert(props) {
    const changeText = (words) => {
        return words.charAt(0).toUpperCase() + words.slice(1);
    }
    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} role="alert" hover`} style={{height:'60px'}}>{changeText(`${props.alert.type}`)} :  {props.alert.message}
            </div>
        </div>
    )
}
