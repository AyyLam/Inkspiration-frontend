import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const About = (props) => {

  return (
    <div>
      <p className="about">
        Inkspiration is a platform where tattoo artists can share their personal sketches with each other
        and users who are looking for ideas for their tattoos. Searching through sketches can INSPIRE
        creations and users will be able to edit sketch pictures to make the consultation process simplier
        on both ends.
        <br/>
        <br/>
        </p>
        <Link to='/pictures' className="pictureLink">Search Pictures!</Link>
    </div>
  )



}

export default About
