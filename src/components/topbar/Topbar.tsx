import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';


export default function Topbar() {
    return (
        <div className ="topbar">
            <div className = "topbarWrapper">
                <div className = "topleft">
                    <span className="logo">Data Visualization</span> 
                </div>
                <div className = "topright">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <div className="topbarIconContainer">
                        <RefreshIcon/>
                    </div>
                    <img src="https://i.pinimg.com/564x/c8/55/ae/c855aea64c62ef90a746df8d1670b017.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

