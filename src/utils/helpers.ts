//todo locale: string, currency: string,
export const formatter = (amount: number) =>
  new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'huf',
    minimumFractionDigits: 0,
  }).format(amount);

export const rng = () => Math.floor(Math.random() * 5);
