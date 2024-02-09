import React from 'react'

const Input = ({label, type, value, onChange}) => {
  
  return(
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="input-text">
        { label }
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={value} type={type} onChange={onChange} required />
    </div>
  )
}
const Select = ({label, options}) => {
  return(
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label>
      <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        {options.map((option)=>(
          <option value={option.value}>{option}</option>
        ))}
      </select>
    </div>
  )
}
const Formulaire = ({inputs, selects, textarea, onSubmit}) => {

  const handleChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
  }

  return (
    <form className="w-full max-w-lg" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        {
          inputs.map((input, index)=>(
            <Input key={index} type={input.type} label={input.label} name={input.name} value={input.value} onChange={(e) => handleChange(e, input.setValue)} />
          ))
        }
        {selects? 
        <>
        {selects.map((select)=>(
          <Select label={select.label} options={select.options}/>
          ))}
        </>
        : null

        }

        {textarea ?
        <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => handleChange(e, textarea.setValue)} >{textarea.value}</textarea>
          : null
        }
      </div>
      <button>Enregistrer</button>
</form>
  )
}

export default Formulaire
