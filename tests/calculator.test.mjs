import assert from 'node:assert/strict'
import { test } from 'node:test'
import { calculate } from '../src/customHooks/useCalculator.ts'

const examples = [
  ['addition', '12', '3', '+', 15],
  ['negative subtraction', '3', '12', '-', -9],
  ['negative multiplication', '-4', '3', '*', -12],
  ['decimal division', '5', '2', '/', 2.5],
  ['decimal addition', '1.5', '2.25', '+', 3.75],
  ['positive exponent', '2', '10', '**', 1024],
  ['negative exponent', '2', '-3', '**', 0.125],
  ['zero exponent', '7', '0', '**', 1],
  ['negative base and odd exponent', '-2', '3', '**', -8],
  ['negative base and even exponent', '-2', '4', '**', 16],
  ['large exponent without a long-running loop', '1', '9007199254740991', '**', 1],
  ['small negative power', '2', '-1024', '**', 5.562684646268003e-309],
]

for (const [name, first, second, operation, expected] of examples) {
  test(name, () => assert.equal(calculate(first, second, operation), expected))
}

const invalidExamples = [
  ['empty input', '', '2', '+', /both numbers/],
  ['whitespace input', '2', '  ', '+', /both numbers/],
  ['partial number', '12abc', '2', '+', /valid, finite/],
  ['non-finite input', 'Infinity', '2', '*', /valid, finite/],
  ['division by zero', '8', '0', '/', /divide by zero/],
  ['fractional exponent', '9', '0.5', '**', /whole-number exponent/],
  ['unsafe exponent', '2', '9007199254740992', '**', /whole-number exponent/],
  ['negative power of zero', '0', '-1', '**', /negative exponent/],
  ['overflow', '1e308', '1e308', '*', /too large/],
]

for (const [name, first, second, operation, expectedError] of invalidExamples) {
  test(name, () => assert.throws(() => calculate(first, second, operation), expectedError))
}
