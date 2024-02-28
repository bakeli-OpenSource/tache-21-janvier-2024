import React from 'react'
import Modal from '../table/Modal'
import useGlobal from '../../utils/hooks/useGlobal'
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

export default function HeaderTable({filtre, nomAjout, body}) {
  const { setShowModal } = useGlobal()
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  
 

  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    const textStyle = isLast ? "text-black font-semibold capitalize" : "capitalize text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue";
    const separator = (
      <span key={`separator-${index}`} className="mx-1 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">{'>'}</span>
    );

    return (
      <React.Fragment key={`breadcrumb-${index}`}>
        {separator}
        {name ==='admin' ? (
          <li className="inline-flex items-center">
          <Link to="/admin/dashboard" className={`inline-flex items-center text-sm ${textStyle}`}>
            {name}
          </Link>
        </li> ) : (
          <li className="inline-flex items-center">
          <Link to={routeTo} className={`inline-flex items-center text-sm ${textStyle}`}>
            {name}
          </Link>
        </li>
        )
        }
      </React.Fragment>
    );
  });


  return (
    <div className=' w-ful flex justify-between px-5 py-3 mt-3 mb-6'>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li>
              <Link to="/" className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue">
                <AiFillHome />
                Home
              </Link>
            </li>
            {breadcrumbs}
          </ol>
        </nav>
        <div className='flex gap-3'>
          <div>
            {
              filtre ? filtre : null
            }
          </div>
          <div>
            {nomAjout ? 
              <BouttonComponent onClick={() => setShowModal(true)} nomAjout={nomAjout} />
              : null
            }
          </div>
        </div>
      <Modal modalTitle={nomAjout} body={body} />
    </div>
  )
}


export function BouttonComponent({onClick, nomAjout}) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className='text-white bg-gray-800 mt-1 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-850 shadow-lg shadow-gray-500/50 dark:shadow-sm font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2'
    >
      {nomAjout}
    </button>
  )
}