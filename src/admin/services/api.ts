import { strategies as initialStrategies } from '../../data/strategies';

// In-memory storage with initial data
let strategiesData = [...initialStrategies];
let formSubmissions: any[] = [];
let customerOrders: any[] = [];

export const adminApi = {
  // Strategies
  getStrategies: () => strategiesData,
  
  addStrategy: (strategy: any) => {
    const newStrategy = { 
      ...strategy, 
      id: strategiesData.length + 1,
      isActive: strategy.isActive ?? true
    };
    strategiesData.push(newStrategy);
    return newStrategy;
  },
  
  updateStrategy: (id: number, strategy: any) => {
    const index = strategiesData.findIndex(s => s.id === id);
    if (index !== -1) {
      strategiesData[index] = { ...strategy, id };
    }
    return strategy;
  },
  
  deleteStrategy: (id: number) => {
    strategiesData = strategiesData.filter(s => s.id !== id);
  },

  // Form Submissions
  addFormSubmission: (submission: any) => {
    formSubmissions.push({
      ...submission,
      id: formSubmissions.length + 1,
      date: new Date(),
      status: 'New'
    });
  },
  getFormSubmissions: () => formSubmissions,

  // Customer Orders
  addOrder: (order: any) => {
    customerOrders.push({
      ...order,
      id: customerOrders.length + 1,
      date: new Date(),
      status: 'Pending'
    });
  },
  getOrders: () => customerOrders,
  updateOrderStatus: (id: number, status: string) => {
    const order = customerOrders.find(o => o.id === id);
    if (order) {
      order.status = status;
    }
  }
};