import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComparisonChartProps {
  data: {
    fd: number;
    mf: number;
    stockSeSimple: number;
    stockSeCompound: number;
  };
  chartType: 'bar' | 'line';
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data, chartType }) => {
  const chartData = {
    labels: ['Bank FD', 'Mutual Fund', 'StockSe (Simple)', 'StockSe (Compound)'],
    datasets: [
      {
        label: 'Investment Returns',
        data: [data.fd, data.mf, data.stockSeSimple, data.stockSeCompound],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(22, 15, 74, 0.5)',
          'rgba(22, 15, 74, 0.8)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(22, 15, 74, 0.8)',
          'rgba(22, 15, 74, 1)',
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: 'Investment Returns Comparison',
        color: '#160F4A'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => '₹' + value.toLocaleString(),
          color: '#160F4A'
        },
        grid: {
          color: 'rgba(22, 15, 74, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#160F4A'
        },
        grid: {
          color: 'rgba(22, 15, 74, 0.1)'
        }
      }
    }
  };

  const ChartComponent = chartType === 'bar' ? Bar : Line;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <ChartComponent data={chartData} options={options} />
    </div>
  );
};