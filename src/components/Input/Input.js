import React from 'react'
import './Input.css'
//https://material-ui.com/components/buttons/#contained-buttons


const Input = ({ setMessage, sendMessage, message })=>{
    return (
    <form className = "form">
        <input className ="input" 
        type ="text"
        placeholder = "Send a message"
        value={message} 
        onChange={(event)=>setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}>
        </input> 
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
    
    )}
export default Input