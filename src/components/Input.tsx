import { ChangeEventHandler, ReactElement } from 'react'

interface IInputProps {
  label?: string
  placeholder?: string
  type: 'text' | 'checkbox' | 'textarea'
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value?: string
  name?: string
  id?: string
  checked?: boolean
  className?: string
  required: boolean
}

export function Input(props: IInputProps): ReactElement {
  const classes = props.type === 'textarea' ? 'input textarea' : 'input'

  const renderInput = (): ReactElement => {
    if (props.type === 'textarea') {
      return (
        <textarea
          className='input'
          id={props.label}
          onChange={props.onChange}
          rows={4}
          value={props.value}
          required={props.required}
        ></textarea>
      )
    }

    return (
      <input
        className='input'
        id={props.label}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        checked={props.checked}
        required={props.required}
      />
    )
  }

  return (
    <div className={classes}>
      {props.label && (
        <label className='label' htmlFor={props.label}>
          {props.label}
        </label>
      )}
      {renderInput()}
    </div>
  )
}
