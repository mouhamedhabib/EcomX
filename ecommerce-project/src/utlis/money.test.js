import { it, expect, describe } from 'vitest'; // it is mean create a test case
// except check the result of the test case
import { FormatMoney } from './money';
// to group a test cases we can use describe
// decscribe = groups test together to write group test use this format describe(' ')

// to creat u frist test u have this low it('')

// in cmd run npx vitest to run the test file
{/*
it('format 1999 cents to 19.99 Dt', () => {
  expect(FormatMoney(1999)).toBe('19.99 Dt');
  // toBe is to check the result
})

it('format display 2 dicimal ', () => {
  expect(FormatMoney(2000)).toBe('20.00 Dt');
  // inside eatch test case we can have multiple expect
  expect(FormatMoney(3050)).toBe('30.50 Dt');
  expect(FormatMoney(1)).toBe('0.01 Dt');
})   */ }

describe('FormatMoney', () => {
  it('format 1999 cents to 19.99 Dt', () => {
  expect(FormatMoney(1999)).toBe('19.99 Dt');
  // toBe is to check the result
})

it('format display 2 dicimal ', () => {
  expect(FormatMoney(2000)).toBe('20.00 Dt');
  // inside eatch test case we can have multiple expect
  expect(FormatMoney(3050)).toBe('30.50 Dt');
  expect(FormatMoney(1)).toBe('0.01 Dt');
})
})
