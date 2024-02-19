import React from 'react'

const BoutonAdmin = (props) => {
    const {text, onClick, children, className} = props
  return <button text={text}
  className={className} 
  onClick={onClick}>{children}</button>
}

export default BoutonAdmin
