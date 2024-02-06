import React from 'react'

const Input = ({value, type, onChange, name, children, placeholder, className}) => {


    return(
      <div>
        <h1>{children}</h1>
          <input type={type} className={className} placeholder={placeholder} value={value} 
          onChange={onChange} name={name}/>
      </div>
    )
  }

export default Input
