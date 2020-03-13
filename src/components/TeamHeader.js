import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './TeamHeader.css'

const TeamHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' TeamHeader-large'
  return (
    <div className={`TeamHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="TeamHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="TeamHeader--Subtitle" src={subtitle} />
        )}
      </div>
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

TeamHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default TeamHeader
