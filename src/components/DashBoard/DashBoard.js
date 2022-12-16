import React from 'react'
import "./DashBoard.css"

function DashBoard(props) {
  return (
    <div className='dashbaord-container'>
        <div className='dash-board-nav'>
            <h5>{props.userEmail}</h5>
        </div>
    </div>
  )
}

export default DashBoard