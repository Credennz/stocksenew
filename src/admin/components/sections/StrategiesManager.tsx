import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAdminData } from '../../hooks/useAdminData';
import { adminApi } from '../../services/api';
import { StrategyForm } from '../forms/StrategyForm';

export const StrategiesManager = () => {
  const { strategies, refreshData } = useAdminData();
  const [showForm, setShowForm] = useState(false);
  const [editingStrategy, setEditingStrategy] = useState(null);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this strategy?')) {
      adminApi.deleteStrategy(id);
      refreshData();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primary">Manage Strategies</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Strategy
        </button>
      </div>

      <div className="grid gap-6">
        {strategies.map((strategy: any) => (
          <div
            key={strategy.id}
            className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-primary">{strategy.name}</h3>
              <p className="text-primary-dark/70">{strategy.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingStrategy(strategy)}
                className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(strategy.id)}
                className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(showForm || editingStrategy) && (
        <StrategyForm
          strategy={editingStrategy}
          onClose={() => {
            setShowForm(false);
            setEditingStrategy(null);
            refreshData();
          }}
          onSubmit={(data) => {
            if (editingStrategy) {
              adminApi.updateStrategy(editingStrategy.id, data);
            } else {
              adminApi.addStrategy(data);
            }
            refreshData();
          }}
        />
      )}
    </div>
  );
};