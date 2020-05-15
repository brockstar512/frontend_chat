import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'



let socket;

 //using context
 export const UsersForList = React.createContext()

const Chat = ({ location })=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://messaging-app-brock.herokuapp.com/'
    // const ENDPOINT = 'https://messaging-app-brock.herokuapp.com/https://messaging-app-brock.herokuapp.com/'

    // const ENDPOINT = 'http://localhost:5000'
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
        //here is the emitter for the join. EVERY EMITTER HAS A CORESSPONDING ON
        //emit you're sending something. on your recieinvg something

         
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

  //this use effect is for handling messages
  //page needs to render to show the messages being sent back and forth
  //just like the other useEffect needs to render when new people are entering
  //    socket.emit('message', {user:'admin', text:`${user.name}, Welcome to the party ${user.room}`})
  //this is what message is sending.(emitting) below is the on function for what is getting
  useEffect(()=>{
    socket.on('message', (message)=>{
    //we're going to use state to keep track of messages
      setMessages(messages => [...messages,message])//need to brush up on this one
      //this is adding every new message sent my admin or anyone else to our messages array
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
      // console.log('here is what the string should be',users)***
      //this is an object, this might be what I want to make context for both rooms and users
      //at this point I don't know if my context is pulling this scpoed user thats an object or the state that is a string
      
    });
  },[])//this will run only when the messages array changes if it had messages in it. now it will referesh... 
  //i think only when something on the page changes. messages or users entering

  //function for sending messages
  const sendMessage = (event) =>{
    event.preventDefault()
    //when a button is pressed the whole page or a form is submited so this prevents that 
    //when this ffunction is activated
    //we don't want the full webpage to refresh
    //in the backend this listens to a message event
    //then send it to the whole server
    if(message){                        //this clears the message field
      socket.emit('sendMessage', message, ()=>setMessage(''))
    }
  }
  
  console.log('here is messages and message',messages, message)
    return (
        <div className = "outerContainer">
          <div className ="container">
            <UsersForList.Provider value ={users}>
              <InfoBar room={room}/>
            </UsersForList.Provider>
            <Messages messages ={messages} name ={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
          </div>
        </div>
    )
}

export default Chat



//steps for recieving dats
//-emit
//useEffect with an socket.on
//set state within the use Effects