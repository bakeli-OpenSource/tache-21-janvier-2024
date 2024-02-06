import React from 'react'
// import useProduits from '../../utils/hooks/useProduits'
import Modal from '../table/Modal'
import useGlobal from '../../utils/hooks/useGlobal'

export default function HeaderTable({title, nomAjout, body}) {
  const { setShowModal } = useGlobal()

  return (
    <div className=' w-full bg-blue-950 flex justify-between px-5 py-3 mt-3'>
      <h5 className='font-bold text-white pt-1'>{title}</h5>
      {nomAjout ? 
        <button 
          type="button"
          onClick={() => setShowModal(true)}
          className='btn bg-green-900 text-white rounded p-2 shadow outline-none focus:outline-none ease-linear'
        >
          {nomAjout}
        </button>
        : null
      }
      <Modal modalTitle={nomAjout} body={body} />
    </div>
  )
}
