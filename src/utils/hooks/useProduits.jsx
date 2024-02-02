import { useContext } from 'react'
import { ProduitsContext } from '../contexte/ProduitsContext';

const useProduits = () => {
    const useProduits = useContext(ProduitsContext)
    return useProduits
}

export default useProduits;
