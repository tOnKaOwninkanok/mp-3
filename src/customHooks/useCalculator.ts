import { useState } from 'react'

export const operations = [
  { symbol: '+', label: 'Add' },
  { symbol: '-', label: 'Subtract' },
  { symbol: '*', label: 'Multiply' },
  { symbol: '/', label: 'Divide' },
  { symbol: '**', label: 'Power' },
] as const

export type Operation = typeof operations[number]['symbol']

// Kept separate from the hook so arithmetic can be tested without rendering React.
export function calculate(firstInput: string, secondInput: string, operation: Operation): number {
  if (!firstInput.trim() || !secondInput.trim()) {
    throw new Error('Please enter both numbers.')
  }
  const first = Number(firstInput)
  const second = Number(secondInput)
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    throw new Error('Please enter valid, finite numbers.')
  }

  let result: number
  switch (operation) {
    case '+': result = first + second; break
    case '-': result = first - second; break
    case '*': result = first * second; break
    case '/':
      if (second === 0) throw new Error('Cannot divide by zero.')
      result = first / second
      break
    case '**': {
      if (!Number.isSafeInteger(second)) {
        throw new Error('For powers, enter a safe whole-number exponent (positive, negative, or zero).')
      }
      if (first === 0 && second < 0) throw new Error('Zero cannot have a negative exponent.')
      // Calculate powers with a for loop. Squaring avoids a long loop for large
      // exponents, and taking the reciprocal handles negative exponents.
      result = 1
      let factor = second < 0 ? 1 / first : first
      for (let exponent = Math.abs(second); exponent > 0; exponent = Math.floor(exponent / 2)) {
        if (exponent % 2 === 1) result *= factor
        if (exponent > 1) factor *= factor
      }
      break
    }
  }
  if (!Number.isFinite(result)) throw new Error('The result is too large to display.')
  return result
}

export default function useCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState('')

  function runOperation(operation: Operation) {
    try {
      setResult(calculate(firstNumber, secondNumber, operation))
      setError('')
    } catch (cause) {
      setResult(null)
      setError(cause instanceof Error ? cause.message : 'Unable to calculate.')
    }
  }

  function clear() {
    setFirstNumber('')
    setSecondNumber('')
    setResult(null)
    setError('')
  }

  return {
    firstNumber, setFirstNumber,
    secondNumber, setSecondNumber,
    result, error, runOperation, clear,
  }
}
