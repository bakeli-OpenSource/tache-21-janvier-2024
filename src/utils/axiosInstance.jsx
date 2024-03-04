import axios from 'axios';

// Créer une instance Axios avec une configuration spécifique
const axiosInstance = axios.create({
  baseURL: 'https://kay-solu-api.onrender.com/api',
  timeout: 5000, // Définir un délai d'attente de 5 secondes
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});

export default axiosInstance;