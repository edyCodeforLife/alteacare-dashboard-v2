import React from 'react'

interface Props {
  text?: string
  classes?: string
}

const Title = (props: Props) => {
  const { text, classes } = props

  return (
    <h1 className={classes}>
      {text}
    </h1>
  )
}

Title.defaultProps = {
  text: '',
  classes: '',
}

export default Title
