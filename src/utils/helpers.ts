export const formatter = (locale: string, currency: string, amount: number) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);
