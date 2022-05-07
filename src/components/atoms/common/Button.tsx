import React from 'react'

interface Props {
  text?: string
  styles?: object
  classes?: string
  disabled?: boolean
  handler?: () => void
}

const Button = (props: Props) => {
  const { text, styles, classes, disabled, handler } = props

  return (
    <button
      style={styles || {}}
      className={classes}
      disabled={disabled}
      onClick={handler}
      type="button"
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: '',
  classes: '',
  styles: null,
  disabled: false,
  handler: () => {},
}

export default Button
