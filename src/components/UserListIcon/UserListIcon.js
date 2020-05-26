import React, {useState,useContext } from 'react'
import { UsersForList } from "../Chat/Chat";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import onlineIcon from '../../icons/onlineIcon.png';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      paddingLeft:'10%',
      textAlign:'center',
    },
  }));
const StyledMenu = withStyles({
   friends: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
   },
    paper: {
      border: 'none',
      background: '#ee4266',
      color: 'white',
      
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
          
        },
      },
    },
  }))(MenuItem);

const UserListIcon =()=>{
    const [showFriends, setShowFriends] = useState(false);
    const userList = useContext(UsersForList)

    const classes = useStyles();

 const showFriendsList = () =>{
    setShowFriends(!showFriends)
 }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
return (
    <div className ='dropDown'>
<div>
      <Button
        className={classes.button}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <i className="fas fa-user-friends" onClick={showFriendsList}/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
<div className ="dropDown">
    <ul className ='userList'>
    {userList ?
        userList.map((obj, index)=>{
                return (
                <ListItemText primary={
                <li key={index}>
                    {obj.name}
                    </li>}/>   
                )
            }) : ""
        }
    </ul>
</div>
        </StyledMenuItem>
      </StyledMenu>
    </div>

</div>
)

}

export default UserListIcon
