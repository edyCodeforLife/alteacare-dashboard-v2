import React from 'react'

interface Props {
  type?: string
  value?: string
  styles?: object
  classes?: string
  disabled?: boolean
  placeholder?: string
  handler?: (evt: any) => void
}

const Input = (props: Props) => {
  const { type, value, styles, handler, classes, disabled, placeholder } = props

  return (
    <input
      placeholder={placeholder}
      onKeyPress={handler}
      style={styles || {}}
      disabled={disabled}
      className={classes}
      onChange={handler}
      autoComplete="off"
      onPaste={handler}
      value={value}
      type={type}
    />
  )
}

Input.defaultProps = {
  handler: () => {},
  placeholder: '',
  disabled: false,
  styles: null,
  type: 'text',
  classes: '',
  value: '',
}

export default Input
