import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import ProfileComponent from '../../components/header/ProfileComponent'

const Profil = () => {
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[230px] " : "md:ml-[85px] m-3 mb-0"} m-5 mb-0 `}>
      <ProfileComponent />
    </div>
  )
}

export default Profil
