import { ChangeEventHandler, ReactElement } from 'react'

interface IInputProps {
  label?: string
  placeholder?: string
  type: 'text' | 'checkbox' | 'time'
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  name?: string
  id?: string
  checked?: boolean
  className?: string
  required: boolean
}

export function Input(props: IInputProps): ReactElement {
  return (
    <input
      className={`input ${props.className}`}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      name={props.name}
      id={props.id}
      checked={props.checked}
      required={props.required}
      // Support for checkbox checked state
    />
  )
}
