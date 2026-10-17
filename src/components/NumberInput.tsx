import styled from 'styled-components'

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  max-width: calc(100% - 10px);
`

type NumberInputProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}

export default function NumberInput({ id, label, value, onChange }: NumberInputProps) {
  return (
    <Input
      id={id}
      type="text"
      inputMode="decimal"
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      autoComplete="off"
    />
  )
}
