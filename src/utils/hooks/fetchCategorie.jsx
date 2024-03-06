import {
    useQuery
  } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'

const useCategories = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['CATEGORIES'],
        queryFn: () =>
        axiosInstance.get('/categories').then((res) =>
            res.json(),
          ),
      })
    
      return { isLoading, error, data }
}

export default useCategories;