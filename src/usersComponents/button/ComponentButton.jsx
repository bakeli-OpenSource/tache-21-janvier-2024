import React from 'react'

const ComponentButton = ({className, texte}) => {
  return (
    <div>
      <button className={className}>{texte}</button>
    </div>
  )
}

export default ComponentButton
