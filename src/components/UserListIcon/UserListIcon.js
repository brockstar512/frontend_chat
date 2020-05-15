import React, {useState,useContext } from 'react'
import { UsersForList } from "../Chat/Chat";



const UserListIcon =()=>{
    const [showFriends, setShowFriends] = useState(false);
    const userList = useContext(UsersForList)
    console.log('this is the user list from the context that I pulled in ',userList)

 const showFriendsList = () =>{
    setShowFriends(!showFriends)
 }

    
    
return (
    <>
<i className="fas fa-user-friends" onClick={showFriendsList}></i>

{showFriends &&
<div className ="dropDown">
    <ul className ='userList'>
    {userList ?
        userList.map((obj, index)=>{
                return (
                <li key={index}>
                    {obj.name}
                    </li>  
                )
            }) : ""
        }
    </ul>
</div>}
</>
)

}

export default UserListIcon
