import React from 'react'
import './Input.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
//https://material-ui.com/components/buttons/#contained-buttons

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  }));
  


const Input = ({ setMessage, sendMessage, message })=>{
    const classes = useStyles();
    return (
    <form className = "form">
        
        <input className ="input" 
        type ="text"
        placeholder = "Send a message"
        value={message} 
        onChange={(event)=>setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}>
        </input> 
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={e => sendMessage(e)}>
        Send</Button>
    </form>
    
    )}
export default Input


// const Input = ({ setMessage, sendMessage, message })=>{
//   const classes = useStyles();
//   return (
//   <form className = "form">
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic"
//       label = "Send a message"
//       value={message} 
//       onChange={(event)=>setMessage(event.target.value)}
//       onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}>
//       </TextField> 
//       <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           endIcon={<Icon>send</Icon>}
//           onClick={e => sendMessage(e)}>
//       Send</Button>
//     </form>
//   </form>
  
//   )}
