import { useState } from "react"

const Input = ({label, type}) => {
  const [valueInput, setValueInput] = useState('')
  const handleChange = (e) => {
    setValueInput(e.target.value)
  }
  return(
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="input-text">
        { label }
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-text" type={type} value={valueInput} onChange={handleChange} required />
    </div>
  )
}
const Select = ({label, options}) => {
  return(
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label>
      <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        {options.map((option)=>(
          <option>{option}</option>
        ))}
      </select>
    </div>
  )
}
const Formulaire = ({inputs, selects, textarea}) => {
  return (
    <form className="w-full max-w-lg" action="/upload" method="post" enctype="multipart/form-data">
      <div className="flex flex-wrap -mx-3 mb-6">
        {
          inputs.map((input, index)=>(
            <Input key={index} type={input.type} label={input.label} />
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
        <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">{textarea.description}</textarea>
          : null
        }
      </div>
      <button>Enregistrer</button>
</form>
  )
}

export default Formulaire
