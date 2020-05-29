import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Join.css'
import './enter.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        // marginBottom: '20px',
      },
    },
  }));

const Join =() =>{
const [name, setName] = useState('');
const [room, setRoom] = useState('');


  const classes = useStyles();

return (
<div className ='joinOuterContainer'>
<div className="joinContainer">
    <h1 className ="heading">Join!</h1>
    
    <form className={classes.root} noValidate autoComplete="off">
    <div class ="welcome">
      <input type ="text" name="name" autocomplete="off" required onChange={(event)=> setName(event.target.value)}/> 
        <label for="name" class ="label-name">
        <span class="content-name">Name</span>
        </label>
    </div>
    <div class ="welcome">
      <input type ="text" name="name" autocomplete="off" required onChange={(event)=> setRoom(event.target.value)}/> 
        <label for="name" class ="label-name">
        <span class="content-name">Room</span>
        </label>
    </div>
      
        </form>
    <Link onClick = {event =>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
    <button className='button' type="submit">Sign In</button>
    </Link>
</div>


</div>
)

}
export default Join
