import React from 'react'
import { Link } from 'react-router-dom'

const SocialIcon = (props) => {
  return (
    <Link to={{ pathname: props.link }} target="blank"><img src={props.icon} alt="facebook" /></Link>
  )
}

export default SocialIcon