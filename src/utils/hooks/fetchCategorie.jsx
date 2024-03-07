import {
    useQuery
  } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'

const useCategories = () => {
  
    const { isLoading, data, error } = useQuery({
        queryKey: ['CATEGORIES'],
        queryFn: () =>
        axiosInstance.get('/categories')
      })
      
    
      return { isLoading, error, data:data?.data }
}

export default useCategories;