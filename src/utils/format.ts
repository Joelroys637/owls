export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

export function formatPlayers(min: number, max: number): string {
  return min === max ? `${min}P` : `${min}–${max}P`;
}

export function formatPlaytime(min: number, max: number): string {
  return min === max ? `${min} min` : `${min}–${max} min`;
}

export function getDiscountPercent(price: number, comparePrice: number): number {
  if (!comparePrice || comparePrice <= price) return 0;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}
