import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="photo-1.jpeg" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Amir Ansari</h2>
                <h4>amir.ansari@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,223</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">713</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("disign")}
                {recentItem("deloper")}
                {recentItem("extra")}
            </div>

        </div>
    )
}

export default Sidebar
