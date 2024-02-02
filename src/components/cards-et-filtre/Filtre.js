import React from 'react'

const Filtre = () => {
  return (
    <div className='flex gap-3 font-normal' >
  <fieldset className='border-2  border-black w-52 text-sm/[16px] rounded-lg'>
    <legend className='mx-2 px-2'>Mois</legend>
    
  <select className='w-48 mt-2'>
    <option value='1'>Janvier</option>
    <option value='1'>Fevrier</option>
    <option value='1'>Mars</option>
    <option value='1'>Avril</option>
    <option value='1'>Mai</option>
    <option value='1'>Juin</option>
    <option value='1'>Juillet</option>
    <option value='1'>Aout</option>
    <option value='1'>Septembre</option>
    <option value='1'>Octobre</option>
    <option value='1'>Novembre</option>
    <option value='1'>Decembre</option>
    
  </select>
  </fieldset>
  <fieldset className='border-2 border-black w-52 text-sm/[16px] rounded-lg'>
    <legend className='mx-2 px-2'>Catégorie</legend>
  <select className='w-48 mt-2'>
    <option value='1'>option1</option>
    <option value='2'>option1</option>
    <option value='3'>option1</option>
  </select>
  </fieldset>
</div>
  )
}

export default Filtre
