import React from 'react'
import Modal from '../table/Modal'
import useGlobal from '../../utils/hooks/useGlobal'

export default function HeaderTable({title, nomAjout, body}) {
  const { setShowModal } = useGlobal()

  return (
    <div className=' w-full bg-blue-950 flex justify-between px-5 py-3 mt-3'>
      <h5 className='font-bold text-white pt-1'>Liste {title}</h5>
      {nomAjout ? 
        <BouttonComponent onClick={() => setShowModal(true)} nomAjout={nomAjout} />
        : null
      }
      <Modal modalTitle={nomAjout} body={body} />
    </div>
  )
}


export function BouttonComponent({onClick, nomAjout}) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className='btn bg-green-900 text-white rounded p-2 shadow outline-none focus:outline-none ease-linear'
    >
      {nomAjout}
    </button>
  )
}
