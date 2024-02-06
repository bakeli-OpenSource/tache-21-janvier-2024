import { useContext } from 'react'
import { GlobalContext } from '../contexte/GlobalContext';

const useGlobal = () => {
    const useGlobal = useContext(GlobalContext)
    return useGlobal
}

export default useGlobal;
