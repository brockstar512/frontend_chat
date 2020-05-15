import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import UserListIcon from '../UserListIcon/UserListIcon'


const InfoBar =({room})=>(
    
    <div className ="infoBar">
        <div className = 'leftInnerContainer'>
                <img className ='onlineIcon'src ={onlineIcon} alt= 'is online'/>
                <h3 className = "fontColorBanner">{room}</h3>
        </div>
        <div className = 'rightInnerContainer'>
            <UserListIcon />
            <a href="/" className = "fontColorBanner">Log out</a>
        </div>
    </div>
    )
export default InfoBar