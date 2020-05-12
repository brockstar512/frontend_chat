import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Join.css'

const Join =() =>{
const [name, setName] = useState('');
const [room, setRoom] = useState('');


return (
    <div className ='joinOuterContainer'>
       <div className="joinContainer">
           <h1 className ="heading">Join!</h1>
           <div><input placeholder = 'Name' className='joinInput' type ='text' onChange={(event)=> setName(event.target.value)}/></div>
           <div><input placeholder = 'Room' classNmae ='joinInput' type ='text' onChange={(event)=> setRoom(event.target.value)}/></div>
           <Link onClick = {event =>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
           <button className='button mt-20' type="submit">Sign In</button>
           </Link>
       </div>
    </div>
)

}
export default Join

//when user joins a connection needs to be fired up

//when user leaves a disconnection function needs to be fired up

//when do we use values
//what is the value attribute for. is it for giving the submitted text a 
//way to reference it with a vairable like name
//on click vs on submit

//allows you to click multiple locations 

//we are passing data through query strings
//when the two inputs are not typed in the button will be null and unclickable


//we are using onclick for what below because its talking about the behavior of the button 

//{event =>(!name || !room) ? event.preventDefault(): null}
//to={`/chat?name=${name}&room=${room}`