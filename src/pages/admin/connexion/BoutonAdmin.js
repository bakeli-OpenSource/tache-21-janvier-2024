import React from 'react'

const BoutonAdmin = (props) => {
    const {type, onClick, children, className} = props
  return <button type={type}
  className={className} 
  onClick={onClick}>{children}</button>
}

export default BoutonAdmin
