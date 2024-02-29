import React from 'react'
import useGlobal from '../../utils/hooks/useGlobal';
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({modalTitle, body, test}) => {
    const { showModal, setShowModal } = useGlobal()
  return (
    <>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative w-auto mx-auto my-6 max-w-3xl ${test === "test" ? "mt-96" : ""}`}>
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    {modalTitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <IoCloseSharp />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto overflow-y-auto">
                  {body}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
    

export default Modal
