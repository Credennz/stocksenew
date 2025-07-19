// Investment calculation utilities
export const calculateInvestment = (
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