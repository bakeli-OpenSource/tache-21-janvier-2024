import React from 'react'

const ComponentButton = ({className, texte, onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{texte}</button>
    </div>
  )
}

export default ComponentButton
