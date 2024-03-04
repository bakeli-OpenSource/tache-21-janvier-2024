import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import ProfileComponent from '../../components/header/ProfileComponent'
import { useLocation } from 'react-router-dom';

const Profil = () => {
  const location = useLocation();
  const urlPageActuel = location.pathname;
    const {open, closedrop} = useSidebare()
  return (
    <div onClick={closedrop} className={`${urlPageActuel === "/profil" ? "mt-[80px]  mx-[30px] " : `${open ? "md:ml-[230px] " : "md:ml-[85px] m-3 mb-0" }` } m-5 mb-0`}>
      <ProfileComponent />
    </div>
  )
}

export default Profil
