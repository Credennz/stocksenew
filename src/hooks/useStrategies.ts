import { useState, useEffect } from 'react';
import { adminApi } from '../admin/services/api';

export const useStrategies = () => {
  const [strategies, setStrategies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStrategies = async () => {
    try {
      setLoading(true);
      const allStrategies = adminApi.getStrategies();
      // Filter only active strategies for the frontend
      const activeStrategies = allStrategies.filter((strategy: any) => strategy.isActive);
      setStrategies(activeStrategies);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching strategies:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStrategies();
  }, []);

  return { 
    strategies, 
    loading, 
    error, 
    refetch: fetchStrategies 
  };
};