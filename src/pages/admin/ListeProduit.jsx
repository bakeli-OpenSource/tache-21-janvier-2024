import React from 'react'
import ListeProdDashboard from '../../components/listeProd/ListeProdDashboard'
import ProduitContextProvider from '../../utils/contexte/ProduitsContext'

export default function ListeProduit({tbody}) {
  return (
      <ProduitContextProvider>
        <ListeProdDashboard tbody={tbody} />
      </ProduitContextProvider>
  )
}
