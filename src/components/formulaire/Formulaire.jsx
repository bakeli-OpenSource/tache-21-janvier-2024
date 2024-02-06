import { useState } from "react"

const Input = ({label, placeholder}) => {
  const [valueInput, setValueInput] = useState('')
  const handleChange = (e) => {
    setValueInput(e.target.value)
  }
  return(
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="input-text">
        { label }
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-text" type="text" placeholder={placeholder} value={valueInput} onChange={handleChange} required />
    </div>
  )
}

const Formulaire = () => {
  return (
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <Input label="test" placeholder="placeholder test" />
        <Input label="test" placeholder="placeholder test" />
      </div>
</form>
  )
}

export default Formulaire
