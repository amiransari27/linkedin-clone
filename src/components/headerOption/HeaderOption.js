import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOption({ avatar, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className="headerOption">
            {
                Icon && <Icon className="headerOption__icon" />
            }
            {
                avatar && (
                    <Avatar src={avatar} alt={avatar} className="headerOption__icon" />
                )
            }
            
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
