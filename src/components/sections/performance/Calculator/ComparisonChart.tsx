import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';

interface ComparisonChartProps {
  values: {
    ourStrategy: number;
    fd: number;
    mutualFund: number;
  };
  initialInvestment: number;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ values, initialInvestment }) => {
  const chartData = {
    labels: ['Initial Investment', 'Fixed Deposit', 'Mutual Fund', 'Our Strategy'],
    datasets: [
      {
        label: 'Investment Growth Comparison',
        data: [
          initialInvestment,
          values.fd,
          values.mutualFund,
          values.ourStrategy * 2
        ],
        backgroundColor: [
          'rgba(22, 15, 74, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(22, 15, 74, 0.5)'
        ],
        borderColor: [
          'rgba(22, 15, 74, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(22, 15, 74, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => '₹' + value.toLocaleString()
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 p-6 bg-white rounded-lg shadow-sm"
    >
      <h3 className="text-xl font-semibold text-primary mb-4 text-center">
        Investment Growth Comparison
      </h3>
      <Line data={chartData} options={chartOptions} />
    </motion.div>
  );
};