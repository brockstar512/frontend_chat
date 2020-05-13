import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Join.css'
import './button.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
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
    <div><TextField id="outlined-basic" variant="outlined"  label = 'Name'  type ='text' onChange={(event)=> setName(event.target.value)}/></div>
    <div><TextField id="outlined-basic" variant="outlined"   label = 'Room'  type ='text' onChange={(event)=> setRoom(event.target.value)}/></div>
    </form>
    <Link onClick = {event =>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
    <button className='bttn-dark' type="submit">Sign In</button>
    </Link>
</div>


</div>
)

}
export default Join

{/* <div class="flex dark">
<a href="#0" className="bttn-dark">Continue</a>
</div> */}

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

{/* <div className ='joinOuterContainer'>
<div className="joinContainer">
    <h1 className ="heading">Join!</h1>
    <form className={classes.root} noValidate autoComplete="off">

    <TextField id="outlined-basic" variant="outlined" />

    <div><TextField id="outlined-basic" variant="outlined"  placeholder = 'Name'  type ='text' onChange={(event)=> setName(event.target.value)}/></div>
    <div><TextField id="outlined-basic" variant="outlined"   placeholder = 'Room'  type ='text' onChange={(event)=> setRoom(event.target.value)}/></div>
    </form>
    <Link onClick = {event =>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
    <button className='button mt-20' type="submit">Sign In</button>
    </Link>
</div>
</div> */}

