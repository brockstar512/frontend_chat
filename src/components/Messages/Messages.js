import React from 'react'
import './Messages.css'
import ScrollToBottom from "react-scroll-to-bottom"
import Message from '../Message/Message'


const Messages =({messages, name})=>{
    //
    // as we iterate over the prop we have put in here we are sending a file called message
    //the whole messages array of objects as well as the current name.
    //we pass the name so we can tell what is the user and what is the messages sent by others
    return(
<ScrollToBottom>
{messages.map((message, index)=> <div key ={index}><Message message ={message} name ={name} /></div>)}
</ScrollToBottom>
    )}

export default Messages