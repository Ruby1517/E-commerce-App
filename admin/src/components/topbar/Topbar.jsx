import React from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
// import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className="logo">rodella admin</span>
        </div>
        <div className="topRight">
          <div className="topbIconContainer">
            <NotificationsNone />
            <span className="topIconBadg">2</span>
          </div>
          <div className="topbIconContainer">
            <Language />
            <span className="topIconBadg">2</span>
          </div>
          <div className="topbIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
        </div>
        
    </div>
  )
}
