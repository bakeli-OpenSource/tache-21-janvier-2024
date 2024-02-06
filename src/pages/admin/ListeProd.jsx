import React from 'react'
import ListeProdDashboard from '../../components/listeProd/ListeProdDashboard'
import ListeContextProvider from '../../utils/contexte/ListeContexte'

const ListeProd = () => {
  return (
    <ListeContextProvider>
        <ListeProdDashboard />
    </ListeContextProvider>
  )
}

export default ListeProd;