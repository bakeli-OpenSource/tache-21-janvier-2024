import React, { useEffect } from 'react'

const Input = ({label, type, value, name, onChange}) => {
  let classInput
  if (type === "radio") {
    classInput = "bg-gray-200"
  }else{
    classInput = "mt-1 p-2 bg-gray-200 border focus:border text-gray-700 text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full"
  }
  return(
    <div className="w-full md:w-1/2 px-3 my-6 md:mb-0">
      <label className="block text-sm font-semibold  text-gray-900">
        { label }
      </label>
      <input className={classInput} name={name} value={value} type={type} onChange={onChange} required />
    </div>
  )
}
const Select = ({label, options, handleSelectChange }) => {
  return(
    <div className="w-full md:w-1/2 px-3 my-6 md:mb-0">
      <label className="block text-sm font-semibold  text-gray-900">{label}</label>
      <select onChange={handleSelectChange} defaultValue=""  className="mt-1 p-2 bg-gray-200 border focus:border text-gray-700 focus:border-double focus:border-sky-600 outline-none rounded-md w-full">
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
    <form className="w-full max-w-lg mx-3"  onSubmit={onSubmit}>
      <div className="flex flex-wrap mb-6">
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
          <div className="w-full md:w-2/2 px-3 my-6 md:mb-0">
            <label className='block text-sm font-semibold  text-gray-900'>Description</label>
            <textarea className="mt-1 p-2 bg-gray-200 border focus:border text-gray-700 focus:border-double focus:border-sky-600 outline-none rounded-md w-full" onChange={(e) => handleChange(e, textarea.setValue)} >{textarea.value}</textarea>
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
