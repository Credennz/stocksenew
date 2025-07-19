import { useState, useEffect } from 'react';
import { adminApi } from '../services/api';

export const useAdminData = () => {
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);
  const [strategies, setStrategies] = useState([]);

  const refreshData = () => {
    setFormSubmissions(adminApi.getFormSubmissions());
    setCustomerOrders(adminApi.getOrders());
    setStrategies(adminApi.getStrategies());
  };

  useEffect(() => {
    refreshData();
  }, []);

  return {
    formSubmissions,
    customerOrders,
    strategies,
    refreshData
  };
};