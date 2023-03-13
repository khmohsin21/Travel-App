import React from 'react'
import './stylecss/hero.css'
export const Hero = (props) => {
  return (
      <div className='container'>
        <div className="left-img">
            <img className='imga' src={props.items.imgurl} alt="" height="300px" width="350px"/>
        </div>
        <div className='content'>
            <img className='topmargin' src={require("./local.png")} alt="" height="20px" width="20px"/>
            <span className='space'>{props.items.location}</span>
            <a className='space' href={props.items.googlemap}>View on Google Maps</a>
            <h1>{props.items.title}</h1>
            <h4><span>{props.items.startdate}</span><span> - {props.items.enddate}</span></h4>
            <p>{props.items.description}</p>
        </div>
    </div>
  )
}
