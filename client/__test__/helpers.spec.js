import { displayDateTime, displayAmount, convertIsoDateToNum } from '../src/helpers/helpers';
import { transactions } from '../../server/db.json';

describe('displayDateTime', () => {

  test(`returns a date in format DD-MM-YYYY HH:MM`, () => {
    const { date } = transactions[0];
    const result = displayDateTime(date);
    expect(result).toBe('27-01-2018 12:34');
  });
  test(`returns a date for input missing 0 in the hour (9:36)`, () => {
    const { date } = transactions[1];
    const result = displayDateTime(date);
    expect(result).toBe('01-12-2017 09:36');
  });

  test(`returns -1 for a non-string input`, () => {
    const result = displayDateTime(12345);
    expect(result).toBe(-1);
  });
  test(`returns -1 for different date format`, () => {
    const result = displayDateTime('2018-01-27T12:34');
    expect(result).toBe(-1);
  });
  test(`returns -1 for no input`, () => {
    const result = displayDateTime();
    expect(result).toBe(-1);
  });
});

describe('displayAmount', () => {

  test(`returns a value to two decimal places`, () => {
    const { amount } = transactions[0];
    const result = displayAmount(amount);
    expect(result).toBe('112.98');
  });
  test(`returns a number to two decimal places for input without two decimals`, () => {
    const result = displayAmount(2);
    expect(result).toBe('2.00');
  });
  test(`returns -1 for a non-numerical input`, () => {
    const result = convertIsoDateToNum('-2adflk');
    expect(result).toBe(-1);
  });
  test(`returns -1 for no input`, () => {
    const result = displayAmount();
    expect(result).toBe(-1);
  });
});

describe('convertIsoDateToNum', () => {

  test(`returns a date in YYYYMMDDHHMM format`, () => {
    const { date } = transactions[0];
    const result = convertIsoDateToNum(date);
    expect(result).toBe(201801271234);
  });
  test(`returns -1 for a non-string input`, () => {
    const result = convertIsoDateToNum(12345);
    expect(result).toBe(-1);
  });
  test(`returns -1 for different date format`, () => {
    const result = convertIsoDateToNum('2018-01-27T12:34');
    expect(result).toBe(-1);
  });
  test(`returns -1 for no input`, () => {
    const result = convertIsoDateToNum();
    expect(result).toBe(-1);
  });
});
