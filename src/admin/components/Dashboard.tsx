import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';
import { StrategiesManager } from './sections/StrategiesManager';
import { FormSubmissions } from './sections/FormSubmissions';
import { CustomerOrders } from './sections/CustomerOrders';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="strategies">
          <TabsList>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
            <TabsTrigger value="forms">Form Submissions</TabsTrigger>
            <TabsTrigger value="orders">Customer Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="strategies">
            <StrategiesManager />
          </TabsContent>

          <TabsContent value="forms">
            <FormSubmissions />
          </TabsContent>

          <TabsContent value="orders">
            <CustomerOrders />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};