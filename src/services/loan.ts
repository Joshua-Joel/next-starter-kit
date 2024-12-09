// src/services/loan.ts
import { Loan } from '@/types';

export const getLoan = async (): Promise<Loan> => {
  const res = await fetch('http://192.168.29.130:5000/loans/123', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch loan data');
  }

  return res.json();
};
