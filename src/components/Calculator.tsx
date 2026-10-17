import styled from 'styled-components'
import useCalculator, { operations } from '../customHooks/useCalculator'
import NumberInput from './NumberInput'

const CalculatorPanel = styled.section`
  background-color: #fce8ee;
  width: 100%;
  max-width: 560px;
  margin: 30px auto;
  padding: 30px;
  text-align: center;
  border-radius: 20px;

  h3 { margin-top: 0; }

  @media (max-width: 750px) {
    padding: 20px 14px;
  }
`

const CalculatorInputs = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const CalculatorHelp = styled.p`
  font-size: calc(12px + 0.3vw);
`

const CalculatorButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`

const CalculatorButton = styled.button`
  background-color: pink;
  color: #50323e;
  padding: 10px 16px;
  border: 1px solid #b66a86;
  border-radius: 8px;
  min-width: 44px;
  cursor: pointer;

  &:hover { background-color: #f1bfd1; }
`

const CalculatorOutput = styled.p<{ $isNegative: boolean; $hasError: boolean }>`
  background-color: white;
  color: ${({ $hasError, $isNegative }) => $hasError ? '#a12424' : $isNegative ? 'red' : 'black'};
  padding: 15px;
  min-height: 60px;
  border-radius: 10px;
  margin-bottom: 0;
`

export default function Calculator() {
    const {
        firstNumber, setFirstNumber,
        secondNumber, setSecondNumber,
        result, error, runOperation, clear,
    } = useCalculator()

    return (
        <CalculatorPanel aria-labelledby="calculator-title">
            <h3 id="calculator-title">TK’s Calculator</h3>
            <CalculatorInputs>
                <NumberInput id="first-number" label="First number" value={firstNumber} onChange={setFirstNumber} />
                <NumberInput id="second-number" label="Second number" value={secondNumber} onChange={setSecondNumber} />
            </CalculatorInputs>
            <CalculatorHelp id="calculator-help">For powers (**), use a whole-number exponent.</CalculatorHelp>
            <CalculatorButtons>
                {operations.map(({ symbol, label }) => (
                    <CalculatorButton key={symbol} type="button" aria-label={label} onClick={() => runOperation(symbol)}>{symbol}</CalculatorButton>
                ))}
                <CalculatorButton type="button" onClick={clear}>Clear</CalculatorButton>
            </CalculatorButtons>
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
