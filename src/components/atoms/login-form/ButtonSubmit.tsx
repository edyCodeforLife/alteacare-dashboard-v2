import React from 'react'

interface Props {
  text: string
  hooks: Function
}

const ButtonSubmit = (props: Props) => {
  const { text, hooks } = props
  return (
    <button
      className="py-3 w-full font-bold text-white bg-main-primary rounded-md"
      onClick={() => hooks()}
    >
      {text}
    </button>
  )
}

ButtonSubmit.defaultProps = {
  text: '',
  hooks: null,
}

export default ButtonSubmit
