import React from 'react'
import './stylecss/Nav.css'
export const Nav = () => {
  return (
    <div>
        <div className="nav-cont">
            <img src={require('../Mycomponents/earth.png')} alt="" height="23px" width="23px" />
            <big className='left'>Travel Journal</big>
        </div>
    </div>
  )
}
