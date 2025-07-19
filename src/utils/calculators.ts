// Calculator utility functions
export const calculateFD = (principal: number, ratePerYear: number, years: number): number => {
  const n = 4; // Quarterly compounding
  return principal * Math.pow(1 + (ratePerYear / 100) / n, n * years);
};

export const calculateMF = (principal: number, ratePerYear: number, years: number): number => {
  return principal * Math.pow(1 + ratePerYear / 100, years);
};

export const calculateStockSe = (
  principal: number,
  ratePerMonth: number,
  months: number,
  isCompounding: boolean
): number => {
  const rate = ratePerMonth / 100;
  if (isCompounding) {
    return principal * Math.pow(1 + rate, months);
  }
  return principal + (principal * rate * months);
};