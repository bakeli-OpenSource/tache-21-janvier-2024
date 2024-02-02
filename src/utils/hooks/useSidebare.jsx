import { useContext } from 'react'
import { SidebareContext } from '../contexte/SidebareContext'

const useSidebare = () => {
    const useSidebare = useContext(SidebareContext)
    return useSidebare
}

export default useSidebare
