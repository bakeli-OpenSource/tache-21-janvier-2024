import React, { useEffect } from 'react'

const Input = ({label, type, value, name, onChange}) => {
  let classInput
  if (type === "radio") {
    classInput = "bg-gray-200"
  }else{
    classInput = "appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  }
  return(
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
        { label }
      </label>
      <input className={classInput} name={name} value={value} type={type} onChange={onChange} required />
    </div>
  )
}
const Select = ({label, options, handleSelectChange }) => {
  return(
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">{label}</label>
      <select onChange={handleSelectChange} defaultValue=""  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        <option value="" disabled>Sélectionnez une catégorie</option>
        {options.map((option)=>(
          <option key={option._id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
const Formulaire = ({inputs, selects, textarea, onSubmit, handleSelectChange }) => {

  const handleChangeFile = (e, setter) => {
      setter(e.target.files[0]);
  }
  const handleChange = (e, setter) => {
      setter(e.target.value);
  }

  useEffect(() => {
      handleSelectChange({ target: { value: '' } })    
  }, [handleSelectChange]);
  

  return (
    <form className="w-full max-w-lg" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        {
          inputs.map((input, index)=>(
            input.type === "file" ?
            (<Input 
              key={index} 
              name={input.name} 
              type={input.type} 
              label={input.label} 
              value={input.value} 
              onChange={(e) => handleChangeFile(e, input.setValue)} 
            /> ) : (
              <Input 
              key={index} 
              name={input.name} 
              type={input.type} 
              label={input.label} 
              value={input.value} 
              onChange={(e) => handleChange(e, input.setValue)} 
            /> )
          ))
        }
        {selects? 
        <>
        {selects.map((select, index)=>(
          <Select 
          key={index}
            label={select.label} 
            options={select.options} 
            handleSelectChange={handleSelectChange}  
          />
          ))}
        </>
        : null

        }

        {textarea ?
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className='block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2'>Description</label>
            <textarea className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => handleChange(e, textarea.setValue)} >{textarea.value}</textarea>
          </div>
              : null
        }
      </div>
      <div className='flex justify-end items-end'>        
        <button className='text-white bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 shadow-lg shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-300/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
          Enregistrer
        </button>
      </div>
</form>
  )
}

export default Formulaire
