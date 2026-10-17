import styled from 'styled-components'
import useCalculator, { operations } from '../customHooks/useCalculator'
import NumberInput from './NumberInput'

const CalculatorPanel = styled.section`
  background-color: #fce8ee;
  width: 560px;
  max-width: 100%;
  margin: 30px auto;
  padding: 30px;
  text-align: center;
  border-radius: 20px;

  @media (max-width: 750px) {
    padding: 20px 14px;
  }
`

const CalculatorButton = styled.button`
  background-color: pink;
  padding: 10px 20px;
  margin: 10px 3px;
  border-radius: 8px;
  min-width: 44px;
  cursor: pointer;

  &:hover { background-color: #f1bfd1; }
`

const CalculatorOutput = styled.h3<{ $isNegative: boolean; $hasError: boolean }>`
  background-color: white;
  color: ${({ $hasError, $isNegative }) => $hasError ? '#a12424' : $isNegative ? 'red' : 'black'};
  padding: 15px;
  min-height: 30px;
  border-radius: 10px;
`

export default function Calculator() {
  const {
    firstNumber, setFirstNumber,
    secondNumber, setSecondNumber,
    result, error, runOperation, clear,
  } = useCalculator()

  return (
    <CalculatorPanel aria-labelledby="calculator-title">
      <h2 id="calculator-title">TK's Calculator</h2>
      <NumberInput id="first-number" label="First number" value={firstNumber} onChange={setFirstNumber} />{' '}
      <NumberInput id="second-number" label="Second number" value={secondNumber} onChange={setSecondNumber} />{' '}
      {operations.map(({ symbol, label }) => (
        <CalculatorButton key={symbol} type="button" aria-label={label} onClick={() => runOperation(symbol)}>{symbol}</CalculatorButton>
      ))}
      <CalculatorButton type="button" onClick={clear}>Clear</CalculatorButton>
      <CalculatorOutput
        id="output"
        $isNegative={result !== null && result < 0}
        $hasError={Boolean(error)}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-label="Calculator result"
      >
        {error || (result !== null ? String(result) : '')}
      </CalculatorOutput>
    </CalculatorPanel>
  )
}
