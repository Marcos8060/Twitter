import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({text, Icon}) {
    return (
        <div className='sidebarOptions'>
            <Icon />
            <h4>{text}</h4>
        </div>
    )
}

export default SidebarOptions
