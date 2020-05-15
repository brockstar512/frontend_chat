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

