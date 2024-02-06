import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'

const Profil = () => {
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      Profil
    </div>
  )
}

export default Profil
