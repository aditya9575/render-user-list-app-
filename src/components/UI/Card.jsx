import React from 'react'
import classes from "./Card.module.css"

const Card = (props) => {
  return (
    // props.childer will give use the content on which this card component is wrapped upon 
    <div className={`${classes.card} ${props.className}` }> {props.children} </div>
  )
}

export default Card