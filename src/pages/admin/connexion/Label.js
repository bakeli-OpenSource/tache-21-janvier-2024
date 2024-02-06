import React from 'react'

const Label = ({name, children, className}) => {
  return (
    <div>
        <label htmlFor=
                {name} className={className}>{children}
                </label>
      
    </div>
  )
}

export default Label
