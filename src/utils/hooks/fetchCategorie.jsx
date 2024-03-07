import {
    useQuery
  } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'

const useProduits = () => {
  
    const { isLoading, data, error } = useQuery({
        queryKey: ['PRODUITS'],
        queryFn: () =>
        axiosInstance.get('/produits')
      })
    
      return { isLoading, error, data:data?.data }
}

export default useProduits;