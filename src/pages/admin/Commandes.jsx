import React from 'react'
import CommandeList from '../../components/commandes/CommandeList'
import CommandeContextProvider from '../../utils/contexte/CommandeContext'

const Commandes = () => {
  return (
    <CommandeContextProvider>
      <CommandeList />
    </CommandeContextProvider>
  )
}

export default Commandes
