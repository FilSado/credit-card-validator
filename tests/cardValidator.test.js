/**
 • @jest-environment jest-environment-jsdom
 */


import { isValidCardNumber } from '../src/components/Validator.js';

describe('isValidCardNumber', () => {
  it('validates a valid Visa card number', () => {
    expect(isValidCardNumber('4111111111111111')).toBe(true);
  });

  it('invalidates an invalid card number', () => {
    expect(isValidCardNumber('1234567890123456')).toBe(false);
  });

  it('validates a valid Amex card number', () => {
    expect(isValidCardNumber('378282246310005')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(isValidCardNumber('')).toBe(false);
  });
});
