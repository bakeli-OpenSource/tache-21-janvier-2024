import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import ProfileComponent from '../../components/header/ProfileComponent'

const Profil = () => {
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <ProfileComponent />
    </div>
  )
}

export default Profil
