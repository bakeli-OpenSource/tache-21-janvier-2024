import React from 'react'
// import CardImage from './CardImage'
import Cards from './Cards'

const DetailsCard = () => {
  return (
    <div>
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-0 sm:py-12'>
        <div className=' max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition' for="">
          <h3 className='text-lg font-bold'>
            Modal opened
            </h3>
            <Cards/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut minima ratione officia obcaecati, impedit suscipit ullam distinctio eos officiis eum ab molestias est, autem, unde aliquam modi ut nisi?</p>
      </div>
    </div>
  </div>
  )
}

export default DetailsCard
