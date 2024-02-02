import React from 'react'

export default function HeaderTable({title, nomAjout}) {

  return (
    <div className=' w-full bg-blue-950 flex justify-between px-5 py-3 mt-3'>
      <h5 className='font-bold text-white pt-1'>{title}</h5>
      {nomAjout ? 
        <button className='btn bg-green-900 text-white rounded p-2'>{nomAjout}</button>
        : null
      }
    </div>
  )
}
