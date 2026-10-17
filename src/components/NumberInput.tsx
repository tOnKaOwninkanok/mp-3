import styled from 'styled-components'

const InputLabel = styled.label`
  flex: 1;
  min-width: 0;
  text-align: left;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #987881;
  border-radius: 4px;
`

type NumberInputProps = {
    id: string
    label: string
    value: string
    onChange: (value: string) => void
}

export default function NumberInput({ id, label, value, onChange }: NumberInputProps) {
    return (
        <InputLabel htmlFor={id}>
            {label}
            <Input
                id={id}
                type="text"
                inputMode="decimal"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                autoComplete="off"
                aria-describedby="calculator-help"
            />
        </InputLabel>
    )
}