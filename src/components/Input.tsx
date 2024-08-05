import { ChangeEventHandler, ReactElement } from 'react'

interface IInputPorps {
  label?: string
  placeholder: string
  type: 'text' | 'checkbox' | 'time'
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
  name?: string
  id?: string
}

export function Input(props: IInputPorps): ReactElement {
  return (
    <>
      {/* <h2>Input</h2> */}
      <input
        className='input-element'
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
      />
    </>
  )
}
