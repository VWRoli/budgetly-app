//todo locale: string, currency: string,
export const formatter = (amount: number) =>
  new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'huf',
    minimumFractionDigits: 0,
  }).format(amount);
