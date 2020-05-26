import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Join.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      welcome:{

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
      
    <div><TextField id="outlined-basic" className={classes.welcome} variant="outlined"  label = 'Name'  type ='text' onChange={(event)=> setName(event.target.value)}/></div>
    <div><TextField id="outlined-basic" variant="outlined"   label = 'Room'  type ='text' onChange={(event)=> setRoom(event.target.value)}/></div>
    </form>
    <Link onClick = {event =>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
    <button className='button' type="submit">Sign In</button>
    </Link>
</div>


</div>
)

}
export default Join
