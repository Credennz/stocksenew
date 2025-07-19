interface FormData {
  initialInvestment: number;
  returnRate: number;
  duration: number;
  reinvest: boolean;
}

export const calculateInvestmentValues = (formData: FormData) => {
  const { initialInvestment, returnRate, duration, reinvest } = formData;
  const monthlyRate = returnRate / 100;

  // Our Strategy
  const ourStrategy = reinvest
    ? initialInvestment * (Math.pow(1 + monthlyRate, duration) - 1) // Compound Interest
    : (initialInvestment * monthlyRate * duration); // Simple Interest

  // Fixed Deposit (6% annual)
  const fd = initialInvestment * (1 + (0.06 * duration / 12));

  // Mutual Fund (12% annual)
  const mutualFund = initialInvestment * Math.pow(1 + (0.12 / 12), duration);

  return {
    ourStrategy: ourStrategy + initialInvestment,
    fd,
    mutualFund
  };
};