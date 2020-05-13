import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

let socket;

const Chat = ({ location })=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'
    //connecting to  the back end (A.)
    //passing end point to server
    
    
//location is basically a url
  useEffect(()=>{
      //destructuring the object I am recieving from the url/ should 
      //you want to know more change var name to data and console. log data and location.search
      const {name, room} = queryString.parse(location.search)
      socket = io(ENDPOINT)
      //connecting to  the back end (B.)

        setName(name)
        setRoom(room)
        console.log(socket)
        // console.log("this is endpoint", ENDPOINT)
        // console.log("location.search...",location.search)
        socket.emit('join', { name, room }, ()=>{
         
         
        })
        //another socket method
        //we have an event 'join' with two arguments that are destructored objects
        //now we can go to the backenend and see whats being emitted


         //we need to return something so we can unmount(disconnect)
         //we are going to call the disconnect method form the backend
         return()=>{
                //these names must be the same of what they are emitting
           socket.emit('disconnect')
           
            //officially turns user socket off
           socket.off()
         }

        //useEffect
        //we should have a request at this point in our backend.. check the console. 
        //also this should log on the front end all the info about this specific socket
        //these calls are happening more than once so we need to establish when use effect is called
        //adding an array will ensure useeffect will run only when render on load
        //of if something is in the array. it will only change when that value changes
        //now useEffect will only change when the socket changes
        //
  }, [ENDPOINT, location.search])
    return (
        <h1>Chat</h1>
    )
}

export default Chat