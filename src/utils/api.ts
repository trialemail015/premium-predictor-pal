
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const predictPremium = async (formData: any) => {
  try {
    const response = await axios.post(`${API_URL}/predict/`, formData);
    return response.data.premium;
  } catch (error) {
    console.error('Error predicting premium:', error);
    throw error;
  }
};
