import React from 'react'

interface Props {
  text?: string
  classes?: string
}

const Label = (props: Props) => {
  const { text, classes } = props

  return (
    <span className={classes}>
      {text}
    </span>
  )
}

Label.defaultProps = {
  text: '',
  classes: '',
}

export default Label
