import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface StrategyFormProps {
  strategy?: any;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const initialFormData = {
  name: '',
  description: '',
  type: '',
  metrics: {
    profit: 0,
    winRate: 0,
    trades: 0,
    drawdown: 0,
    profitFactor: 0
  },
  indicators: [''],
  timeframes: [] as string[],
  isActive: true,
  tradingViewLink: ''
};

const timeframeOptions = [
  '1m', '3m', '5m', '15m', '30m',
  '1h', '2h', '4h', '6h', '8h',
  '12h', '1d', '3d', '1w', '1M'
];

export const StrategyForm: React.FC<StrategyFormProps> = ({ 
  strategy, 
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    ...initialFormData,
    ...strategy,
    metrics: {
      ...initialFormData.metrics,
      ...(strategy?.metrics || {})
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleMetricsChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      metrics: {
        ...formData.metrics,
        [field]: parseFloat(value) || 0
      }
    });
  };

  const addIndicator = () => {
    setFormData({
      ...formData,
      indicators: [...formData.indicators, '']
    });
  };

  const removeIndicator = (index: number) => {
    const newIndicators = [...formData.indicators];
    newIndicators.splice(index, 1);
    setFormData({
      ...formData,
      indicators: newIndicators
    });
  };

  const handleIndicatorChange = (index: number, value: string) => {
    const newIndicators = [...formData.indicators];
    newIndicators[index] = value;
    setFormData({
      ...formData,
      indicators: newIndicators
    });
  };

  const handleTimeframeToggle = (timeframe: string) => {
    const newTimeframes = formData.timeframes.includes(timeframe)
      ? formData.timeframes.filter(t => t !== timeframe)
      : [...formData.timeframes, timeframe];
    
    setFormData({
      ...formData,
      timeframes: newTimeframes
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary">
            {strategy ? 'Edit Strategy' : 'Add Strategy'}
          </h2>
          <button onClick={onClose} className="text-primary-dark/50 hover:text-primary-dark">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Strategy Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Strategy Type
              </label>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Net Profit
                </label>
                <input
                  type="number"
                  value={formData.metrics.profit}
                  onChange={(e) => handleMetricsChange('profit', e.target.value)}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Win Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.metrics.winRate}
                  onChange={(e) => handleMetricsChange('winRate', e.target.value)}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Total Trades
                </label>
                <input
                  type="number"
                  value={formData.metrics.trades}
                  onChange={(e) => handleMetricsChange('trades', e.target.value)}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Drawdown (%)
                </label>
                <input
                  type="number"
                  value={formData.metrics.drawdown}
                  onChange={(e) => handleMetricsChange('drawdown', e.target.value)}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Profit Factor
                </label>
                <input
                  type="number"
                  value={formData.metrics.profitFactor}
                  onChange={(e) => handleMetricsChange('profitFactor', e.target.value)}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  step="0.001"
                  required
                />
              </div>
            </div>
          </div>

          {/* Technical Indicators */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-primary">Technical Indicators</h3>
              <button
                type="button"
                onClick={addIndicator}
                className="text-primary hover:text-primary-dark"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.indicators.map((indicator, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={indicator}
                    onChange={(e) => handleIndicatorChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter indicator name"
                    required
                  />
                  {formData.indicators.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIndicator(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Timeframes */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Supported Timeframes</h3>
            <div className="flex flex-wrap gap-2">
              {timeframeOptions.map((timeframe) => (
                <button
                  key={timeframe}
                  type="button"
                  onClick={() => handleTimeframeToggle(timeframe)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    formData.timeframes.includes(timeframe)
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          {/* TradingView Link */}
          <div>
            <label className="block text-sm font-medium text-primary-dark mb-1">
              TradingView Link
            </label>
            <input
              type="url"
              value={formData.tradingViewLink}
              onChange={(e) => setFormData({ ...formData, tradingViewLink: e.target.value })}
              className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="https://tradingview.com/script/..."
            />
          </div>

          {/* Active Status */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-4 h-4 text-primary border-primary/20 rounded focus:ring-primary"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-primary-dark">
              Strategy is active
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-primary-dark hover:text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              {strategy ? 'Update Strategy' : 'Add Strategy'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};