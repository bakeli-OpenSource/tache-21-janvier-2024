import { useContext } from 'react'
import { CommandeContext } from '../contexte/CommandeContext';

const useCommandes = () => {
    const useCommandes = useContext(CommandeContext)
    return useCommandes
}

export default useCommandes;