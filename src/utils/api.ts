import ms from 'ms';

export const getStaleTime = (value = '24h') => ms(value);
