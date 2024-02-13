import React from 'react'
import ListeContextProvider from '../../utils/contexte/ListeContexte'
import ListeProdDashboard from '../../components/listeProd/ListeProdDashboard'

export default function ListeProduit() {
  return (
    <ListeContextProvider>
        <ListeProdDashboard />
    </ListeContextProvider>
  )
}
